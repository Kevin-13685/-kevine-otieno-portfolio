import ssl
import smtplib
from django.core.mail.backends.smtp import EmailBackend as SMTPEmailBackend


class CustomEmailBackend(SMTPEmailBackend):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Disable SSL verification at the module level
        ssl._create_default_https_context = ssl._create_unverified_context
    
    def open(self):
        """
        Ensure an open connection to the email server. Return whether or not a new
        connection was required (True or False) or None if an exception occurred.
        """
        if self.connection:
            # Nothing to do if the connection is already open.
            return False
        
        connection_params = {}
        if self.timeout is not None:
            connection_params['timeout'] = self.timeout
        
        try:
            # Create SMTP connection
            self.connection = smtplib.SMTP(self.host, self.port, **connection_params)
            self.connection.set_debuglevel(0)
            
            if self.use_tls:
                # Create SSL context that bypasses certificate verification
                context = ssl.create_default_context()
                context.check_hostname = False
                context.verify_mode = ssl.CERT_NONE
                context.set_ciphers('DEFAULT@SECLEVEL=1')  # Lower security level
                
                # Start TLS with the unverified context
                self.connection.starttls(context=context)
            
            if self.username and self.password:
                self.connection.login(self.username, self.password)
            return True
        except Exception as e:
            print(f"Email connection error: {e}")
            if not self.fail_silently:
                raise
