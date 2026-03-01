import MarkdownImage from "~/components/content/MarkdownImage.vue";

/**
 * Map of custom component names used in content markdown to Vue components.
 * Pass to <ContentRenderer :components="contentComponents"> so that tags like
 * <MarkdownImg> and <MarkdownImage> render correctly.
 */
export function useContentComponents() {
  return {
    MarkdownImg: MarkdownImage,
    MarkdownImage,
  };
}
