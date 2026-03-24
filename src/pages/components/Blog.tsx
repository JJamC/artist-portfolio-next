export default function Blog() {

  return (
    <div>
      <img
        className="h-full w-full object-cover"
        src={
          "https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/website.jpg"
        }
        alt="YouTube thumbnail"
      />
      <br></br>
      <div>
        <p className="p-5 text-[16px] text-[#D2E4C4]">
          <b>Jay Jameil Carroll</b> is a pianist, composer and music producer
          based in Manchester, England.
        </p>
      </div>
    </div>
  );
}