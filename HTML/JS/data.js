document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bodyTypeForm');
    const dci = document.getElementById('calory');
    const c = document.getElementById('carbs');
    const p = document.getElementById('proteins');
    const f = document.getElementById('fats');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const age = parseFloat(document.getElementById('age').value);
        const bodyType = document.getElementById('bodyType').value;
        const male = document.getElementById('male').checked;
        const female = document.getElementById('female').checked;
        let workoutList = document.getElementById('workoutList');
        workoutList.innerHTML = '';

        let BMR, calories, carbs, proteins, fats;

        if (male) {
            BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (female) {
            BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        } else {
            console.log("Invalid");
            return;
        }

        switch (bodyType) {
            case 'ectomorph':
                calories = BMR * 1.55;
                carbs = calories * 0.6;
                proteins = calories * 0.25;
                fats = calories * 0.15;
                breakfast = document.getElementById('breakfast').innerHTML = "Breakfast: Oatmeal with fruits (banana, berries) and a protein shake."
                midmorning = document.getElementById('midmorning').innerHTML = "Mid-Morning Snack: Greek yogurt with honey and nuts."
                lunch = document.getElementById('lunch').innerHTML = "Lunch: Grilled chicken breast with quinoa and steamed vegetables."
                afternoon = document.getElementById('afternoon').innerHTML = "Afternoon Snack: Whole grain bread with peanut butter and an apple."
                evening = document.getElementById('evening').innerHTML = "Cottage cheese with berries."
                dinner = document.getElementById('dinner').innerHTML = "Baked salmon with sweet potatoes and a side salad."
                frequency = document.getElementById('frequency').innerHTML = "Frequency: 3-6 days per week"
                day1 = document.getElementById('day1').innerHTML = "Day 1: Chest and Triceps"
                day2 = document.getElementById('day2').innerHTML = "Day 2: Back and Biceps"
                day3 = document.getElementById('day3').innerHTML = "Day 3: Rest or Light Cardio"
                day4 = document.getElementById("day4").innerHTML = "Day 4: Shoulders and Abs"
                day5 = document.getElementById('day5').innerHTML = "Day 5: Legs"
                day6 = document.getElementById('day6').innerHTML = "Day 6: Rest or Light Cardio"
                day7 = document.getElementById('day7').innerHTML = "Day 7: Full Body or Active Recovery"
                workouts = [
                    "Chest: Bench Press, Dumbbell Flyes",
                    "Back: Pull-Ups, Bent-Over Rows",
                    "Shoulders: Shoulder Press, Lateral Raises",
                    "Legs: Squats, Lunges",
                    "Biceps: Bicep Curls, Hammer Curls",
                    "Triceps: Tricep Dips, Skull Crushers",
                    "Abs: Crunches, Planks"
                ]
                break;
            case 'mesomorph':
                calories = BMR * 1.55;
                carbs = calories * 0.4;
                proteins = calories * 0.3;
                fats = calories * 0.3;
                breakfast = document.getElementById('breakfast').innerHTML = "Breakfast: Whole grain toast with avocado and poached eggs."
                midmorning = document.getElementById('midmorning').innerHTML = "Mid-Morning Snack: Smoothie with protein powder, spinach, banana, and almond milk."
                lunch = document.getElementById('lunch').innerHTML = "Lunch: Grilled chicken breast with sweet potatoes and broccoli."
                afternoon = document.getElementById('afternoon').innerHTML = "Afternoon Snack: Apple Slices with Peanut Butter"
                evening = document.getElementById('evening').innerHTML = "Dinner: Lean beef stir-fry with mixed vegetables."
                dinner = document.getElementById('dinner').innerHTML = "Evening Snack: Cottage cheese with pineapple"
                frequency = document.getElementById('frequency').innerHTML = "Frequency: 3-6 days per week"
                day1 = document.getElementById('day1').innerHTML = "Day 1: Chest and Back"
                day2 = document.getElementById('day2').innerHTML = "Day 2: Legs and Abs"
                day3 = document.getElementById('day3').innerHTML = "Day 3: Rest or Light Cardio"
                day4 = document.getElementById("day4").innerHTML = "Day 4: Shoulders and Arms"
                day5 = document.getElementById('day5').innerHTML = "Day 5: Full Body"
                day6 = document.getElementById('day6').innerHTML = "Day 6: Rest or Light Cardio"
                day7 = document.getElementById('day7').innerHTML = "Day 7: Active Recovery"
                workouts = [
                    "Chest and Back: Bench Press, Pull-Ups",
                    "Legs and Abs: Squats, Planks",
                    "Shoulders and Arms: Shoulder Press, Bicep Curls",
                    "Full Body: Deadlifts, Push-Ups"
                ]
                break;
            case 'endomorph':
                calories = BMR * 1.55;
                carbs = calories * 0.3;
                proteins = calories * 0.35;
                fats = calories * 0.35;
                breakfast = document.getElementById('breakfast').innerHTML = "Breakfast: Scrambled eggs with spinach and whole grain toast."
                midmorning = document.getElementById('midmorning').innerHTML = "Mid-Morning Snack: Apple slices with almond butter."
                lunch = document.getElementById('lunch').innerHTML = "Lunch: Turkey salad with mixed greens, avocado, and olive oil dressing."
                afternoon = document.getElementById('afternoon').innerHTML = "Afternoon Snack: Cottage cheese with cucumber slices."
                evening = document.getElementById('evening').innerHTML = "Evening Snack: Greek yogurt with a handful of nuts."
                dinner = document.getElementById('dinner').innerHTML = "Dinner: Grilled chicken with roasted vegetables and brown rice."
                frequency = document.getElementById('frequency').innerHTML = "Frequency: 5-6 days per week"
                day1 = document.getElementById('day1').innerHTML = "Day 1: Full Body Workout"
                day2 = document.getElementById('day2').innerHTML = "Day 2: HIIT Cardio"
                day3 = document.getElementById('day3').innerHTML = "Day 3: Upper Body"
                day4 = document.getElementById("day4").innerHTML = "Day 4: Lower Body"
                day5 = document.getElementById('day5').innerHTML = "Day 5: HIIT Cardio"
                day6 = document.getElementById('day6').innerHTML = "Day 6: Full Body Workout"
                day7 = document.getElementById('day7').innerHTML = "Day 7: Rest or Light Activity"
                workouts = [
                    "Full Body: Deadlifts, Squats, Push-Ups",
                    "HIIT Cardio: Sprints, Burpees",
                    "Upper Body: Bench Press, Rows",
                    "Lower Body: Lunges, Leg Press"
                ]
                break;
            default:
                console.log("Invalid body type");
                return;
        }
        workouts.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            workoutList.appendChild(li);
        });

        dci.innerHTML = "Calorie Intake: " + calories.toFixed(2);
        c.innerHTML = "Carbs Intake: " + carbs.toFixed(2);
        p.innerHTML = "Proteins Intake: " + proteins.toFixed(2);
        f.innerHTML = "Fats Intake: " + fats.toFixed(2);

        displayResults();
    });

    function displayResults() {
        const results = document.getElementById('results');
        container = document.querySelector('.container');
        container.style.display = "none"
        results.classList.add('show');
    }
});
