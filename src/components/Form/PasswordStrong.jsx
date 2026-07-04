import { useFormContext, useWatch } from "react-hook-form";

export default function PasswordStrength({ name = "password" }) {
    const { control } = useFormContext();

    const password = useWatch({
        control,
        name,
        defaultValue: "",
    });

    const rules = [
        {
            label: "Au moins 8 caractères",
            valid: password.length >= 8,
        },
        {
            label: "Au moins une lettre",
            valid: /[a-zA-Z]/.test(password),
        },
        {
            label: "Au moins un chiffre",
            valid: /\d/.test(password),
        },
        {
            label: "Au moins un caractère spécial",
            valid: /[^a-zA-Z0-9]/.test(password),
        },
    ];

    const score = rules.filter(r => r.valid).length;

    const levels = [
        "Très faible",
        "Faible",
        "Moyen",
        "Bon",
        "Excellent",
    ];

    const colors = [
        "bg-red-500",
        "bg-orange-500",
        "bg-yellow-400",
        "bg-lime-500",
        "bg-green-500",
    ];

    return (
        <div className="rounded-lg bg-zinc-900 p-5 mt-2">

            <div className="flex justify-between mb-4">

                <span className="font-semibold">
                    Votre mot de passe doit contenir
                </span>

                <span className="text-orange-400 font-semibold">
                    {levels[score]}
                </span>

            </div>

            <div className="space-y-2">

                {rules.map(rule => (

                    <div
                        key={rule.label}
                        className={`flex items-center gap-2 ${
                            rule.valid
                                ? "text-green-400"
                                : "text-gray-400"
                        }`}
                    >

                        <span>
                            {rule.valid ? "🟢" : "⚪"}
                        </span>

                        <span>{rule.label}</span>

                    </div>

                ))}

            </div>

            <div className="h-2 rounded bg-zinc-700 mt-5">

                <div
                    className={`h-2 rounded transition-all duration-300 ${colors[score]}`}
                    style={{
                        width: `${score * 25}%`,
                    }}
                />

            </div>

        </div>
    );
}