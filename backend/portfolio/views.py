from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from .models import Profile, Project, Skill, Experience, ContactMessage
from .serializers import (
    ProfileSerializer, ProjectSerializer, SkillSerializer, 
    ExperienceSerializer, ContactMessageSerializer
)


class ProfileListCreateView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProjectListCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer


class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class SkillListCreateView(generics.ListCreateAPIView):
    queryset = Skill.objects.all().order_by('category', 'name')
    serializer_class = SkillSerializer


class SkillDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ExperienceListCreateView(generics.ListCreateAPIView):
    queryset = Experience.objects.all().order_by('-start_date')
    serializer_class = ExperienceSerializer


class ExperienceDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class ContactMessageListCreateView(generics.ListCreateAPIView):
    queryset = ContactMessage.objects.all().order_by('-created_at')
    serializer_class = ContactMessageSerializer


class ContactMessageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer


@api_view(['GET'])
def profile_summary(request):
    """Get a summary of the profile with key information"""
    try:
        profile = Profile.objects.first()
        if not profile:
            return Response({'error': 'No profile found'}, status=status.HTTP_404_NOT_FOUND)
        
        projects = Project.objects.filter(featured=True)[:3]
        skills = Skill.objects.all()[:10]
        experiences = Experience.objects.all()[:5]
        
        data = {
            'profile': ProfileSerializer(profile).data,
            'featured_projects': ProjectSerializer(projects, many=True).data,
            'skills': SkillSerializer(skills, many=True).data,
            'experiences': ExperienceSerializer(experiences, many=True).data,
        }
        
        return Response(data)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def send_contact_message(request):
    """Send a contact message"""
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        # Save the message to database
        message = serializer.save()
        
        # Log message to file (since email has SSL issues)
        try:
            import os
            from django.conf import settings
            
            # Create contact messages directory if it doesn't exist
            contact_dir = os.path.join(settings.BASE_DIR, 'contact_messages')
            os.makedirs(contact_dir, exist_ok=True)
            
            # Log to file
            log_file = os.path.join(contact_dir, 'messages.log')
            with open(log_file, 'a', encoding='utf-8') as f:
                f.write(f"\n{'='*60}\n")
                f.write(f"Date: {message.created_at}\n")
                f.write(f"From: {message.name} ({message.email})\n")
                f.write(f"Subject: {message.subject}\n")
                f.write(f"Message: {message.message}\n")
                f.write(f"{'='*60}\n")
            
            # Try to send email (but don't fail if it doesn't work)
            try:
                subject = f"📧 NEW CONTACT: {message.name} - {message.subject}"
                message_body = f"""
🎯 NEW MESSAGE FROM YOUR PORTFOLIO WEBSITE
==========================================

👤 CONTACT DETAILS:
Name: {message.name}
Email: {message.email}
Subject: {message.subject}

💬 MESSAGE:
{message.message}

📧 TO REPLY: Click reply and the email will go to {message.email}

---
Sent from your portfolio contact form at localhost:3000/contact
                """
                
                from django.core.mail import EmailMessage
                
                email = EmailMessage(
                    subject=subject,
                    body=message_body,
                    from_email=getattr(settings, 'DEFAULT_FROM_EMAIL', 'noreply@portfolio.com'),
                    to=['kelvinaremo2016@gmail.com'],
                    reply_to=[message.email],  # This makes replies go to the original sender
                )
                email.send(fail_silently=True)
                
                return Response({
                    'message': 'Message sent successfully!',
                    'data': serializer.data
                }, status=status.HTTP_201_CREATED)
                
            except Exception as email_error:
                # Email failed, but message is logged to file
                return Response({
                    'message': 'Message received and logged successfully!',
                    'data': serializer.data,
                    'note': 'Check contact_messages/messages.log for details'
                }, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            # Still save the message even if logging fails
            return Response({
                'message': 'Message saved successfully!',
                'data': serializer.data,
                'note': 'Check database for message details'
            }, status=status.HTTP_201_CREATED)
            
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
