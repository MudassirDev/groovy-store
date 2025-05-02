function CollectionCard({ collection }) {
    return (<>
        <a href={collection.url} className="CollectionCard">
            <div className="rounded-[10px] overflow-hidden">
                <img className="CollectionCardImage" src={collection.image} />
            </div>
            <p>{collection.name}</p>
        </a>
    </>)
}

export default CollectionCard
