function showService(problem) {

    let result = document.getElementById("result");

    if (problem === "long") {

        result.innerHTML =
            "✂️ Recommended Service: <strong>Length Adjustment</strong><br>" +
            "Estimated Price: ₱30–₱50";

    }

    else if (problem === "loose") {

        result.innerHTML =
            "🧵 Recommended Service: <strong>Waist/Size Adjustment</strong><br>" +
            "Estimated Price: ₱40–₱60";

    }

    else if (problem === "torn") {

        result.innerHTML =
            "🪡 Recommended Service: <strong>Clothing Repair</strong><br>" +
            "Estimated Price: ₱20–₱50";

    }

    else if (problem === "button") {

        result.innerHTML =
            "🔘 Recommended Service: <strong>Button Replacement</strong><br>" +
            "Estimated Price: ₱10–₱20";

    }

}

function showUniform(type) {

    let result = document.getElementById("uniform-result");

    if (type === "student-top") {

        result.innerHTML =
            "<strong>Student Uniform Top</strong><br><br>" +
            "Available in selected sizes.<br>" +
            "Visit the tailoring service to check the current stock and price.";

    }

    else if (type === "skirt") {

    result.innerHTML =
        "<strong>Student Uniform Skirt</strong><br><br>" +
        "Ready-made CTU uniform skirt available in selected sizes.<br>" +
        "Visit the tailoring service to check available sizes and price.";

}

    else if (type === "pants") {

        result.innerHTML =
            "<strong>Student Uniform Pants</strong><br><br>" +
            "Ready-made pants available in selected sizes.<br>" +
            "Visit the tailoring service to check available sizes and price.";

    }

    else if (type === "other") {

        result.innerHTML =
            "<strong>Other Uniform Pieces</strong><br><br>" +
            "Ask the tailor about other available CTU uniform pieces, " +
            "sizes, and prices.";

    }

}
