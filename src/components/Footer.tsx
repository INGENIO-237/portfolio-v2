export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="pb-5">
      <hr className="h-4" />
      <div className="w-full flex justify-between">
        <div className="flex gap-2">
          <span>&copy; {year}</span>
          <h1>INGENIO</h1>
        </div>
        <h1>All rights reserved.</h1>
      </div>
    </div>
  );
}
