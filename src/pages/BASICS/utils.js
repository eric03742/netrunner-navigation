export const formatContent = (content) => {
  let contents = content
  contents = contents.replace(/&nbsp;/g, ' ');
  // 信用点
  contents = contents.replace(/{credit}/g, '<i class="icon icon-credit"></i>');
  // 时点
  contents = contents.replace(/{click}/g, '<i class="icon icon-click"></i>');
  // 子进程
  contents = contents.replace(/{subroutine}/g, '<i class="icon icon-subroutine"></i>');
  return contents;
}