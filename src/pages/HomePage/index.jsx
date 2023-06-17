import Accordion from '@/components/core/Accordion';
import Button from '@/components/core/Button';

const HomePage = () => {
  return (
    <div>
      <Accordion title="Buttons">
        <Button variant="primary" text="Primary" />
        <Button variant="secondary" text="Secondary" />
        <Button variant="tertiary" text="Tetriary" />
        <Button variant="success" text="Success" />
        <Button variant="warning" text="Warning" />
        <Button variant="info" text="Info" />
        <Button variant="danger" text="Danger" />
        <Button variant="link" text="Link" />
        <Button
          variant="primary"
          text="Button"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-1 h-4 w-4">
              <path
                fillRule="evenodd"
                d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
        <Button
          disabled
          variant="primary"
          text="Button"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-1 h-4 w-4">
              <path
                fillRule="evenodd"
                d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
      </Accordion>
    </div>
  );
};

export default HomePage;
