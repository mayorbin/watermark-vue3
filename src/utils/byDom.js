(function () {
  function cssHelper(el, property) {
    for (let key in property) {
      el.style[key] = property[key];
    }
  }

  // 设置页面水印层
  const waterWrapper = document.createElement('div');
  cssHelper(waterWrapper, {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    'flex-wrap': 'wrap',
    overflow: 'hidden',
    'pointer-events': 'none',
  });

  // 设置水印盒子大小，计算每行每列盒子个数
  const waterWidth = 180;
  const waterHeight = 100;
  const { clientWidth, clientHeight } =
    document.documentElement || document.body;
  const columns = Math.ceil(clientWidth / waterWidth);
  const rows = Math.ceil(clientHeight / waterHeight);

  // 工厂函数生成水印文本内容
  function createItem() {
    const item = document.createElement('div');
    item.innerHTML = 'div实现水印';
    cssHelper(item, {
      position: 'absolute',
      top: '50px',
      left: '50px',
      'font-size': '16px',
      'line-height': 1.5,
      color: '#000',
      transform: 'rotate(-15deg)',
      'transform-origin': '0 0',
      overflow: 'hidden',
      'white-space': 'nowrap',
      'user-select': 'none',
      opacity: 0.1,
    });
    return item;
  }

  // 遍历生成当前网页的水印盒子
  for (let i = 0; i < rows * columns; i++) {
    const wrap = document.createElement('div');
    cssHelper(
      wrap,
      Object.create({
        position: 'relative',
        width: `${waterWidth}px`,
        height: `${waterHeight}px`,
        flex: `0 0 ${waterWidth}px`,
        overflow: 'hidden',
      })
    );
    wrap.appendChild(createItem());
    waterWrapper.appendChild(wrap);
  }

  // 添加到body中
  document.body.appendChild(waterWrapper);
})();
