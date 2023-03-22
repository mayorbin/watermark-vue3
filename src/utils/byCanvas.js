(function () {
  function createWatermark() {
    const angle = -20;
    const txt = 'canvas实现水印';
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 100;

    const ctx = canvas.getContext('2d');
    // 清除默认内容
    ctx.clearRect(0, 0, 200, 100);
    ctx.fillStyle = '#000';
    ctx.font = '16px serif';
    ctx.globalAlpha = 0.2;
    ctx.rotate((Math.PI / 180) * angle);
    // 设置内容需要放到最后，否则会失效
    ctx.fillText(txt, 0, 50);
    return canvas.toDataURL();
  }

  const watermark = document.createElement('div');
  watermark.className = 'watermark';
  watermark.style.backgroundImage = `url(${createWatermark()})`;
  document.body.appendChild(watermark);

  // 设置需要观察的元素
  const targetNode = document.body;
  // 设置观察器的回调函数
  const callback = function (mutationList, observer) {
    for (let mutation of mutationList) {
      // removedNodes被删除的dom元素列表
      mutation.removedNodes.forEach(item => {
        // watermark为水印元素
        if (item === watermark) {
          // 如果水印元素被删除，就再添加回被观察元素中
          targetNode.appendChild(item);
        }
      });
    }
  };
  // 设置观察器的配置
  const config = {
    attrubutes: true, // 属性变动是否会触发
    subtree: true, // 后代元素变动是否会触发
    childList: true, // 子元素变动是否会触发
  };
  // 创建一个 mutationObserver 观察器
  const observer = new MutationObserver(callback);
  // 给观察器添加配置
  observer.observe(targetNode, config);
})();
