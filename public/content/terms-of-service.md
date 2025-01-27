It looks like the issue might be with how you're trying to access the markdown files. In Next.js, static assets like images, markdown files, or other resources should be placed in the `public` directory, but they need to be accessed via their URLs, not via `fs` (filesystem) operations. 

Let's check and fix the issue.

### Key Points:
1. Files in the `public` folder can be accessed directly using `/content/{fileName}.md`.
2. The code you provided for fetching markdown files is correct in terms of how it's trying to fetch the markdown, but it seems the actual folder structure may be wrong or the files are not being accessed properly.

### Solution: Make Sure Files Are in the Correct Location

First, ensure the markdown files are placed in the `public/content` folder:

```
/public
  /content
    privacy-policy.md
    legal-notice.md
    terms-of-service.md
```

Make sure you are fetching the markdown like this:

```ts
const privacyPolicyRes = await fetch('/content/privacy-policy.md');
const legalNoticeRes = await fetch('/content/legal-notice.md');
const termsOfServiceRes = await fetch('/content/terms-of-service.md');
```

### Updated Steps:
1. **Ensure Folder Structure:** Place your markdown files under the `public/content` folder.
   
2. **Ensure Static File Access:** In Next.js, any file placed in the `public` directory can be accessed directly using its relative URL.

### Final Component (Updated)

Here is the final code for the Footer component that should fetch the markdown files correctly from the `public/content` directory:

#### `src/components/Footer/index.tsx`
```tsx
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const Footer = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState('');
  const [legalNotice, setLegalNotice] = useState('');
  const [termsOfService, setTermsOfService] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  useEffect(() => {
    // Fetch markdown files when component mounts
    const fetchContent = async () => {
      try {
        const privacyPolicyRes = await fetch('/content/privacy-policy.md');
        const legalNoticeRes = await fetch('/content/legal-notice.md');
        const termsOfServiceRes = await fetch('/content/terms-of-service.md');
        
        if (!privacyPolicyRes.ok || !legalNoticeRes.ok || !termsOfServiceRes.ok) {
          throw new Error('Error fetching markdown files');
        }

        const privacyPolicyText = await privacyPolicyRes.text();
        const legalNoticeText = await legalNoticeRes.text();
        const termsOfServiceText = await termsOfServiceRes.text();

        setPrivacyPolicy(privacyPolicyText);
        setLegalNotice(legalNoticeText);
        setTermsOfService(termsOfServiceText);
      } catch (error) {
        console.error("Error fetching markdown content:", error);
      }
    };

    fetchContent();
  }, []);

  const openPopup = (content: string) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent('');
  };

  return (
    <div className="w-full px-4 md:w-2/3 lg:w-1/2">
      <div className="my-1">
        <div className="-mx-3 flex items-center justify-center md:justify-start">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); openPopup(privacyPolicy); }}
            className="px-3 text-base text-gray-7 hover:text-white hover:underline"
          >
            Privacy policy
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); openPopup(legalNotice); }}
            className="px-3 text-base text-gray-7 hover:text-white hover:underline"
          >
            Legal notice
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); openPopup(termsOfService); }}
            className="px-3 text-base text-gray-7 hover:text-white hover:underline"
          >
            Terms of service
          </a>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Popup Content</h2>
            <ReactMarkdown>{popupContent}</ReactMarkdown>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
```

### What This Code Does:
- **Fetching Files:** The `useEffect` hook fetches the markdown files from the `/content/` folder.
- **Rendering Markdown:** The markdown content is rendered using the `ReactMarkdown` component inside the popup.
- **Popup Logic:** When you click on the links (Privacy Policy, Legal Notice, or Terms of Service), it opens the respective markdown file in a popup modal.

### Troubleshooting:
- **Check the URL:** Ensure that the files are being served correctly from the `/content` directory by accessing the files in your browser. For example, `http://localhost:3000/content/privacy-policy.md` should load the markdown file.
- **Check the Fetch Status:** If there's an error in fetching, it will log an error in the console. Make sure the URLs are correct and that the markdown files are accessible.

### Conclusion:
This solution should now fetch and display the markdown content correctly from the `public/content` folder in your Next.js application. Let me know if it works or if you need further help!