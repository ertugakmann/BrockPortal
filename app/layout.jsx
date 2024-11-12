import "../styles/globals.css";

export const metadata = {
    title: "BrockPortal",
    description: "Brockenhurst College Portal",
};

const RootLayout = ({ children }) => {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
