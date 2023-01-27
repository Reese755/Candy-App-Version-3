import React from 'react';
import candy from './Candy'

function NutritionFacts ({name, image, nutrition_facts}) {




return (
<div>
<h2> Nutrition Facts</h2>
<p>Serving Size: {nutrition_facts.serving_size} </p>
<p>Calories: {nutrition_facts.calories}</p>
<p>Sugar: {nutrition_facts.sugar}</p>
<p>Sodium: {nutrition_facts.sodium}</p>
<p>Protein: {nutrition_facts.protein}</p>

</div>
    )
}
export default NutritionFacts;