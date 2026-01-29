// @ts-nocheck
import { Div } from './div';

export const Root = () => {
  return (
    <>
      <div id="root">
        <Div />
        <div
          role="region"
          aria-label="Notifications (F8)"
          tabIndex="-1"
          style={{
            pointerEvents: 'none',
          }}
        >
          <ol
            tabIndex="-1"
            data-replit-metadata="client/src/components/ui/toaster.tsx:30:6"
            data-component-name="ToastViewport"
            className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
          />
        </div>
      </div>
    </>
  );
};
