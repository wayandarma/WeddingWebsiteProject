export default function CommentForm() {
  return (
    <div className="container bg-primary py-4">
      <form action="#" method="post" className="flex flex-col gap-4">
        <div>
          <div className="label">
            <span className="label-text">Nama kamu siapa ?</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Tinggalkan Pesan atau Ucapan.</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Message / wish"
          ></textarea>
        </label>
        <button className="btn btn-secondary text-primary">
          Post A Message{" "}
        </button>
      </form>
    </div>
  );
}
