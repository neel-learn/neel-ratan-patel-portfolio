import "./css/Loader.css"

const Loader = () => {

    return (
        <div id="website-loader">
        <script
          src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.1/dist/dotlottie-wc.js"
          type="module"></script>
        <dotlottie-wc
          src="https://lottie.host/c7f5c7e2-6c6f-4132-913b-64f16edd1f34/xZhGpm9iz5.lottie"
          style={{width: "300px",height: "300px"}}
          autoplay
          loop></dotlottie-wc>
    </div>
    )
}