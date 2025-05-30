import { useParams } from "react-router"
import NotFound from "./NotFound"
import CollectionGrid from "../collections/CollectionGrid"

const validCollections = ["test"]

function CollectionPage() {
    const { collection } = useParams()

    if (!validCollections.includes(collection)) {
        return <NotFound />
    }

    return (
        <div>
            <div className="bg-white p-[16px_16px_16px_0px] flex items-center flex-wrap">
                <ul className="flex items-center">
                    <li className="inline-flex items-center">
                        <a href="/" className="text-gray-600 hover:text-blue-500">
                            <svg className="w-5 h-auto fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" /></svg>
                        </a>

                        <span className="mx-2 h-auto text-gray-400 font-medium">/</span>
                    </li>

                    <li className="inline-flex items-center">
                        <a href="/collections" className="text-gray-600">
                            Collections
                        </a>

                        <span className="mx-2 h-auto text-gray-400 font-medium">/</span>
                    </li>

                    <li className="inline-flex items-center">
                        <a className="text-gray-600">
                            test
                        </a>
                    </li>
                </ul>
            </div>
            <CollectionGrid />
            <div className="mt-[30px]"></div>
        </div>
    )
}

export default CollectionPage
