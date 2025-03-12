import { Navbar } from "@/components/navbar";

export default function ContactPage() {
    return (
        <Navbar>
            <div className="py-12 container px-2 mx-auto max-w-screen-sm flex flex-col gap-6 items-stretch">
                <h1 className="text-4xl md:text-6xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 font-stretch-ultra-expanded">
                    Connect with us
                </h1>

                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    className="flex flex-col gap-6"
                >
                    <label className="flex flex-col gap-2 border border-neutral-200 p-6 rounded-3xl relative focus-within:border-neutral-950 transition-all duration-300 ease-in-out">
                        <input
                            type="text"
                            name="name"
                            required
                            className="peer focus:outline-none relative top-2"
                            placeholder=" "
                        />
                        <span className="absolute text-neutral-500 peer-placeholder-shown:top-6 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-not-placeholder-shown:top-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-semibold transition-all duration-300 ease-in-out">
                            Name
                        </span>
                    </label>
                    <label className="flex flex-col gap-2 border border-neutral-200 p-6 rounded-3xl relative focus-within:border-neutral-950 transition-all duration-300 ease-in-out">
                        <input
                            type="email"
                            name="email"
                            required
                            className="peer focus:outline-none relative top-2"
                            placeholder=" "
                        />
                        <span className="absolute text-neutral-500 peer-placeholder-shown:top-6 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-not-placeholder-shown:top-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-semibold transition-all duration-300 ease-in-out">
                            Email
                        </span>
                    </label>
                    <label className="flex flex-col gap-2 border border-neutral-200 p-6 rounded-3xl relative focus-within:border-neutral-950 transition-all duration-300 ease-in-out">
                        <textarea
                            name="message"
                            required
                            className="peer focus:outline-none relative top-2 min-h-[100px] resize-none"
                            placeholder=" "
                        ></textarea>
                        <span className="absolute text-neutral-500 peer-placeholder-shown:top-6 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-not-placeholder-shown:top-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-semibold transition-all duration-300 ease-in-out">
                            Message
                        </span>
                    </label>

                    <button
                        type="submit"
                        className="bg-neutral-950 text-white rounded-full px-6 py-2 font-semibold text-lg hover:bg-neutral-800 transition-colors duration-300 ease-in-out hover:shadow-md cursor-pointer"
                    >
                        Send
                    </button>
                </form>
            </div>
        </Navbar>
    );
}
