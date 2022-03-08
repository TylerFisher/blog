import SubscribeForm from "./SubscribeForm";

export default function SubscribeBlock() {
  return (
    <div className="bg-orange-600 my-12 py-14 md:my-16 md:py-20" id="subscribe">
      <div className="px-14">
        <div className="mx-auto max-w-lg">
          <h3 className="text-white text-2xl md:text-3xl font-bold">
            Sign up for the newsletter
          </h3>
          <p className="text-white md:text-lg leading-normal mt-4">
            Don’t miss out on the latest articles. Sign up now to get articles in your inbox.
          </p>
          <SubscribeForm />
        </div>
      </div>
    </div>
  )
}