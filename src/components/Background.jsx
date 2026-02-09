import "./css/Background.css";

const Background = () => {
    return (
        <div className="background-container">
            {/* These divs will become the moving colorful blobs */}
            <div className="blob blob-purple"></div>
            <div className="blob blob-cyan"></div>
            <div className="blob blob-blue"></div>
            
            {/* Optional: A subtle noise texture overlay for a premium look */}
            <div className="overlay"></div>
        </div>
    );
}

export default Background;