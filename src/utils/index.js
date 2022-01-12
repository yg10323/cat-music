/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
export default {

  /**
   * 格式化播放量
   */
  getCount(count) {
    if (count < 0) return;
    if (count < 10000) {
      return count;
    } else if (Math.floor(count / 10000) < 10000) {
      return Math.floor(count / 1000) / 10 + "万";
    } else {
      return Math.floor(count / 10000000) / 10 + "亿";
    }
  },

  /**
   * 给图片重新设置大小
   */
  getSizeImage(imgUrl, size) {
    return `${imgUrl}?param=${size}x${size}`;
  }
} 