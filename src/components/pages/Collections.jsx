import { Fade } from "react-awesome-reveal"
import CollectionList from "../collections/CollectionsList"

function Collections() {
    return (<>
        <div>
            <Fade>
                <div className="flex justify-center">
                    <h2 className="text-[27.2px] font-[600] mb-10">Our Top Picks</h2>
                </div>
                <CollectionList />
            </Fade>
            <div className="m-[75px]"></div>
        </div>
    </>)
}
export default Collections
