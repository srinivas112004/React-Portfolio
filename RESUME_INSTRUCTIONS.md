# How to Add Your Resume PDF

## Steps:

1. **Create/Export your resume as a PDF file**
   - Name it: `resume.pdf`

2. **Add the PDF to your project**
   - Place the `resume.pdf` file in the `public` folder of your project
   - Path should be: `public/resume.pdf`

3. **That's it!**
   - The Resume section will automatically link to this file
   - The "Download Resume" button will download: `Srinivas_Kandagatla_Resume.pdf`
   - The "View Online" button will open the PDF in a new tab

## Alternative: Host Online

If you prefer to host your resume online (Google Drive, Dropbox, etc.):

1. Upload your resume to Google Drive or Dropbox
2. Get a shareable/public link
3. Open `src/components/Resume.tsx`
4. Update the URLs in the `handleDownload` and `handleViewOnline` functions:
   ```typescript
   const handleDownload = () => {
     window.open('YOUR_GOOGLE_DRIVE_LINK', '_blank');
   };

   const handleViewOnline = () => {
     window.open('YOUR_GOOGLE_DRIVE_LINK', '_blank');
   };
   ```

## Tips:

- Keep your resume file size under 2MB for faster loading
- Update the resume regularly to reflect your latest achievements
- The "Updated Recently" badge helps show your resume is current
