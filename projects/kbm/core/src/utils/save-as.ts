export function saveAs(data: Blob, name: string) {
  const url = URL.createObjectURL(data);
  const aNode = document.createElement('a');
  aNode.rel = 'noopener';
  aNode.download = name;
  aNode.href = url;
  aNode.click();
  URL.revokeObjectURL(url);
}
