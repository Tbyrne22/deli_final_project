import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '../components/Typography';

const backgroundImage = 'images/menu.png';

const privacyPage = {
    background: '#FFF',
    color:'#000',
    fontFamily:'Roboto',
    py:{xs: 8}
  };


  export default function PrivacyContent(){
    const h5Styles = {
      marginTop: '30px',
    }
    return (
      <Box component="section" sx={{...privacyPage, mx: { xs: 2, md: 4 }}}>
        <div>
          <Typography variant="h3" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Last Updated: 12/13/2023
          </Typography>
          <Typography variant="body2" paragraph>
            Thank you for visiting Expeditions Deli’s business website. This Privacy Policy outlines how we collect, use, disclose, and protect information gathered from visitors to our website.
          </Typography>
  
          <Typography variant="h5" style={h5Styles} gutterBottom>
            Information We Collect
          </Typography>
          <Typography variant="body2" paragraph>
            When you visit our website, we may collect the following types of information:
          </Typography>
          <Typography variant="body2" component="ul">
            <li>
              <Typography variant="body2">
                <strong>Personal Information:</strong> Such as your name, email address, phone number, or any other information voluntarily provided by you through contact forms or inquiries.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Usage Information:</strong> This includes information about how you interact with our website, such as your IP address, browser type, pages visited, and the time and date of your visit. This information helps us improve our website&apos;s functionality and user experience.
              </Typography>
            </li>
          </Typography>
  
          <Typography variant="h5" style={h5Styles} gutterBottom>
            How We Use Your Information
          </Typography>
          <Typography variant="body2" paragraph>
            We use the collected information for the following purposes:
          </Typography>
          <Typography variant="body2" component="ul">
            <li>
              <Typography variant="body2">
                To respond to your inquiries, fulfill orders, and provide customer support.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                To personalize your experience and improve our website&apos;s functionality and content.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                To send periodic emails regarding promotions, offers, or updates related to our deli, only if you have opted to receive such communications.
              </Typography>
            </li>
          </Typography>
  
          <Typography variant="h5" style={h5Styles} gutterBottom>
            Information Sharing and Disclosure
          </Typography>
          <Typography variant="body2" paragraph>
            We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except for the following circumstances:
          </Typography>
          <Typography variant="body2" component="ul">
            <li>
              <Typography variant="body2">
                <strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you. These parties are obligated to keep your information confidential.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Legal Compliance:</strong> We may disclose your information when required by law or in response to a legal process or government request.
              </Typography>
            </li>
          </Typography>
  
          <Typography variant="h5" style={h5Styles} gutterBottom>
            Data Security
          </Typography>
          <Typography variant="body2" paragraph>
            We implement a variety of security measures to safeguard your information and ensure its confidentiality. However, no method of transmission over the internet or electronic storage is entirely secure. Therefore, while we strive to protect your data, we cannot guarantee absolute security.
          </Typography>
  
          <Typography variant="h5" style={h5Styles} gutterBottom>
            Your Choices
          </Typography>
          <Typography variant="body2" paragraph>
            You have the right to opt-out of receiving promotional emails from us. You can unsubscribe by following the instructions provided in our emails or by contacting us directly.
          </Typography>
  
          <Typography variant="h5" style={h5Styles} gutterBottom>
            Updates to Privacy Policy
          </Typography>
          <Typography variant="body2" paragraph>
            We reserve the right to update this Privacy Policy at any time. Any changes made will be reflected on this page, along with the updated modification date.
          </Typography>
  
          <Typography variant="h5" style={h5Styles} gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" paragraph>
            If you have any questions or concerns regarding this Privacy Policy, please contact us at expeditionsdeli@gmail.com
          </Typography>
          <Typography variant="body1" paragraph>
            By using our website, you consent to this Privacy Policy.
          </Typography>
        </div>
      </Box>
    );
  };
  