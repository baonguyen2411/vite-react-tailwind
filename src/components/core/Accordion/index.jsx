import { memo } from 'react';
import { PropTypes } from 'prop-types';

const Accordion = ({ children, title, expandIcon }) => {
  const dataTeTarget = title.toLowerCase().replace(' ', '-');
  return (
    <div id="accordionExample">
      <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
        <h2 className="accordion-header mb-0" id="headingThree">
          <button
            className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            data-te-target={`#${dataTeTarget}`}
            aria-expanded="false"
            aria-controls={dataTeTarget}
          >
            {title}
            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
              {expandIcon}
            </span>
          </button>
        </h2>
        <div
          id={dataTeTarget}
          className="!visible hidden"
          data-te-collapse-item
          aria-labelledby="headingThree"
          data-te-parent="#accordionExample"
        >
          <div className="px-5 py-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
  expandIcon: PropTypes.any,
};

Accordion.defaultProps = {
  children: <div />,
  title: 'Accordion component',
  expandIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  ),
};

export default memo(Accordion);
