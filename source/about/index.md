---
title: 关于本站
date: 2024-01-27 21:53:55
updated: 2024-11-08 00:00:00
comments: false
---

![asuna](https://registry.npmmirror.com/js-asuna/latest/files/pic/Asuna/Asuna16x9.webp)

- 本站始建于 2024 年 01 月 27 日
- <span id="timeDate">天数载入中..</span><span id="times">时分秒载入中..</span>
- 站长将以最低成本维护本站，力求稳定存活长久

<script data-pjax>
  function initializeRuntimeCounter() {
    var start = new Date("2024/01/27 21:52:00");
    function update() {
      var now = new Date();
      now.setTime(now.getTime() + 250);
      var days = (now - start) / 1000 / 60 / 60 / 24;
      var dnum = Math.floor(days);
      var hours = (now - start) / 1000 / 60 / 60 - 24 * dnum;
      var hnum = Math.floor(hours).toString().padStart(2, '0');
      var minutes = (now - start) / 1000 / 60 - 24 * 60 * dnum - 60 * hnum;
      var mnum = Math.floor(minutes).toString().padStart(2, '0');
      var seconds = (now - start) / 1000 - 24 * 60 * 60 * dnum - 60 * 60 * hnum - 60 * mnum;
      var snum = Math.round(seconds).toString().padStart(2, '0');

      document.getElementById("timeDate").innerHTML = "距今已艰难运行了&nbsp" + dnum + "&nbsp天&nbsp";
      document.getElementById("times").innerHTML = hnum + "&nbsp小时&nbsp" + mnum + "&nbsp分&nbsp" + snum + "&nbsp秒";
    }
    update();
    setInterval(update, 1000);
  }
  document.addEventListener("DOMContentLoaded", initializeRuntimeCounter);
  document.addEventListener("pjax:complete", initializeRuntimeCounter);
</script>

## 通讯方式

1. Telegram：[FullDiveSAO](https://t.me/FullDiveSAO)
2. E-mail：[i@saop.cc](mailto:i@saop.cc)

## 订阅本站

如需订阅本站的 `Feed` 可访问：[atom.xml](/atom.xml)
推荐这款在线 `RSS` 阅读器：[QiReader](https://www.qireader.com/)
可使用 `RSS` 阅读器订阅本站，以便获取最新资源推送~

## 永久网址

找不到网址的时候可到这里看最新网址：
[AdingApkgg/gal-site](https://github.com/AdingApkgg/gal-site/blob/main/README.md)
收藏以上回家链，避免忘记归家路~

## 开放源码

本站大部分源码已开源至 GitHub 社区，
有兴趣探索本站的原理可访问：
[AdingApkgg/vns](https://github.com/AdingApkgg/vns)
