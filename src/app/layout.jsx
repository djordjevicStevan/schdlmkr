import { ClerkProvider } from "@clerk/nextjs";
import { CssBaseline } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <CssBaseline />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
