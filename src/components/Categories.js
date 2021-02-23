function Categories({setActiveCategory, categories, activeCategory}) {
    return (
        <div>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='game-category'
            >
                <option value=''>---</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories