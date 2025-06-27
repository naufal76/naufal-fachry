export default function Behance({ embedUrl, height = 500 }) {
  return (
    <div className="w-full max-w-6xl mx-auto my-8 overflow-hidden rounded-lg">
      <iframe
        src={"https://www.behance.net/embed/project/202910957?ilo0=1"}
        title="Behance Project"
        className="w-full border-none"
        style={{ height: 500, overflow: "hidden" }}
       

        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}