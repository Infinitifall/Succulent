const anchorTags = document.getElementsByTagName("a");

for (let i = 0; i < anchorTags.length; i++) {
  const href = anchorTags[i].getAttribute("href");
  if (href && href.startsWith("http")) {
    anchorTags[i].setAttribute("target", "_blank");
  }
}