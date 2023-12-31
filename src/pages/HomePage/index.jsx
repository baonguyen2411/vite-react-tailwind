import Accordion from '@/components/core/Accordion';
import Avatar from '@/components/core/Avatar';
import Breadcrumbs from '@/components/core/Breadcrumbs';
import Button from '@/components/core/Button';
import Dropdown from '@/components/core/Dropdown';
import Popover from '@/components/core/Popover';
import Toasts from '@/components/core/Toasts';

const HomePage = () => {
  return (
    <div>
      <Accordion title="Buttons">
        <div className="flex items-center flex-wrap gap-4">
          <Button variant="primary" />
          <Button variant="secondary" />
          <Button variant="tertiary" />
          <Button variant="success" />
          <Button variant="warning" />
          <Button variant="info" />
          <Button variant="danger" />
          <Button variant="link" />
          <Button
            variant="primary"
            text="Button"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1 h-4 w-4"
              >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1 h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        </div>
      </Accordion>
      <Accordion title="Avatars">
        <div className="flex items-center flex-wrap gap-4">
          <Avatar />
          <Avatar className="rounded-lg" src="https://tecdn.b-cdn.net/img/new/avatars/5.webp" />
        </div>
      </Accordion>
      <Accordion title="Breadcrumbs">
        <Breadcrumbs />
      </Accordion>
      <Accordion title="Dropdown">
        <Dropdown />
      </Accordion>
      <Accordion title="Popover">
        <Popover />
      </Accordion>
      <Accordion title="Toasts">
        <Toasts />
      </Accordion>
    </div>
  );
};

export default HomePage;
