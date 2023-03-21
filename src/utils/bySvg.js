(function () {
  function createWaterMark() {
    const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="200px" height="100px">
        <text x="0px" y="30px" dy="16px"
            text-anchor="start"
            stroke="#000"
            stroke-opacity="0.1"
            fill="none"
            transform="rotate(-20)"
            font-weight="100"
            font-size="16"
            >
            svg实现水印
        </text>
    </svg>`;
    return `data:image/svg+xml;base64,${window.btoa(
      unescape(encodeURIComponent(svgStr))
    )}`;
  }
  const watermakr = document.createElement('div');
  watermakr.className = 'watermark';
  watermakr.style.backgroundImage = `url(${createWaterMark()})`;
  document.body.appendChild(watermakr);
})();
