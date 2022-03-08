export default function SubscribeForm() {
  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/tylrfishr"
      method="post"
      className="mt-8"
    >
      <label
        htmlFor="bd-email"
        className="text-white block"
      >
        Enter your email
      </label>
      <div className="flex flex-row flex-wrap">
        <input
          type="email"
          name="email"
          id="bd-email"
          placeholder="Your email here"
          className="form-input px-4 py-2 rounded-lg w-full md:w-auto"
        />
        <input
          type="submit"
          value="Subscribe"
          className="bg-white px-4 py-2 rounded-lg mt-4 md:mt-0 md:ml-4 w-full md:w-auto" 
        />
      </div>
    </form>
  )
}