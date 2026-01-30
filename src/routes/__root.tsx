/// <reference types="vite/client" />
import { Outlet, createRootRoute, Scripts } from '@tanstack/react-router';

import globalCss from '@/styles/global.css?url';
import { TrpcProvider } from '@/client/trpc/provider';

export const Route = createRootRoute({
  component: RootDocument,
});

function RootDocument() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Vujahday+Script&display=swap"
          rel="stylesheet"
        />
        <title>Nandini Srivastava</title>
        <link rel="stylesheet" href={globalCss} />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <TrpcProvider>
          <Outlet />
        </TrpcProvider>
        <Scripts />
      </body>
    </html>
  );
}
