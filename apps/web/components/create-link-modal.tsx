export default function CreateLinkModal() {
  return (
    <dialog open>
      <form action="" method="dialog">
        <label htmlFor="originalurl">Paste your original URL</label>
        <input type="text" id="originalurl" />

        <input type="text" id="shorturl" />

        <button>Shrink it</button>
      </form>
    </dialog>
  );
}
