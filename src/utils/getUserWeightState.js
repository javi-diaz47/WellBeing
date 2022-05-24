const getUserWeightState = (health) => {
    
    const UNDER_WEIGHT = 18.5;
    const ADECUATE_WEIGHT = 24.9;
    const OVERWEIGHT = 29.9;
    const OBESE_1 = 34.3;
    const OBESE_2 = 39.9;

    if(health > 0 && health < UNDER_WEIGHT){
        return  "Estas bajo de peso";

    }else if(health > UNDER_WEIGHT && health < ADECUATE_WEIGHT){
        return "Estas en tu peso ideal";

    }else if(health > ADECUATE_WEIGHT && health < OVERWEIGHT){
        return "Estas en sobrepeso";

    }else if(health > OVERWEIGHT && health < OBESE_1){
        return "Estas en Obesidad grado 1";

    }else if(health > OBESE_1 && health < OBESE_2){
        return "Estas en Obesidad grado 2";

    }else{
        return "Estas en Obesidad grado 3"
    }

    return result
}

export { getUserWeightState };

