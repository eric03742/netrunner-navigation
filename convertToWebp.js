const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

// 配置：图片源目录
const ASSET_DIR = path.join(__dirname, 'src', 'assets');
// 需要转换的图片格式
const SUPPORTED_FORMATS = ['jpg', 'jpeg', 'png'];

/**
 * 检查文件是否为支持的图片格式
 * @param {string} filename 文件名
 * @returns {boolean} 是否为支持的图片格式
 */
function isSupportedImage(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  if (filename.includes('favicon')) {
    return false;
  }
  return SUPPORTED_FORMATS.includes(ext);
}

/**
 * 转换单个图片为webp格式并删除源文件
 * @param {string} srcPath 源图片路径
 * @param {number} quality 图片质量 (0-100)
 */
async function convertToWebpAndReplace(srcPath, quality = 80) {
  try {
    const dir = path.dirname(srcPath);
    const baseName = path.basename(srcPath, path.extname(srcPath));
    const destPath = path.join(dir, `${baseName}.webp`);

    // 转换为webp格式
    await sharp(srcPath)
      .webp({ quality })
      .toFile(destPath);

    // 删除源文件
    await fs.unlink(srcPath);

    console.log(`转换成功: ${srcPath} -> ${destPath}`);
  } catch (error) {
    console.error(`转换失败: ${srcPath}`, error.message);
  }
}

/**
 * 递归处理目录下的所有图片
 * @param {string} currentDir 当前处理的目录
 */
async function processDirectory(currentDir) {
  try {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        // 递归处理子目录
        await processDirectory(fullPath);
      } else if (entry.isFile() && isSupportedImage(entry.name)) {
        // 转换图片并删除源文件
        await convertToWebpAndReplace(fullPath);
      }
    }
  } catch (error) {
    console.error(`处理目录出错: ${currentDir}`, error.message);
  }
}

/**
 * 主函数
 */
async function main() {
  console.log(`开始转换图片，源目录: ${ASSET_DIR}`);

  try {
    // 检查源目录是否存在
    await fs.access(ASSET_DIR);

    // 开始处理
    await processDirectory(ASSET_DIR);

    console.log('图片转换完成！');
  } catch (error) {
    console.error('转换过程出错:', error.message);
  }
}

// 执行主函数
main();