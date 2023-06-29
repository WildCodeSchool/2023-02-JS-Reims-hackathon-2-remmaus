import React, { useState } from "react";

function FAQ() {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Comment rechercher un téléphone?",
      answer:
        "Pour rechercher un téléphone, vous pouvez utiliser la fonction de recherche intégrée sur notre site. Il vous suffit de saisir le nom du téléphone, la marque ou toute autre caractéristique pertinente dans la barre de recherche. Les résultats afficheront les téléphones correspondants à vos critères de recherche.",
    },
    {
      id: 2,
      question: "Comment enregistrer un téléphone?",
      answer:
        "Pour enregistrer un téléphone, suivez ces étapes : Cliquez sur le bouton 'Enregistrer un téléphone', remplissez les informations demandées telles que la marque, le modèle, la capacité de stockage, etc.",
    },
    {
      id: 3,
      question: "Que-est ce que le score antutu?",
      answer:
        "Le score Antutu est une mesure de performance utilisée pour évaluer les capacités d'un téléphone. Il s'agit d'un test de benchmark qui évalue différents aspects du téléphone tels que le processeur, la mémoire, les performances graphiques, etc. Le score Antutu permet de comparer les performances d'un téléphone par rapport à d'autres modèles et de déterminer sa puissance globale.",
    },
    {
      id: 4,
      question:
        "Quelle sont les différentes informations a rentrer pour enregistrer un téléphone?",
      answer:
        "Lors de l'enregistrement d'un téléphone, les informations suivantes peuvent être demandées; marque du téléphone, modèle du téléphone, RAM (mémoire vive), stockage, indice Antutu (score de performance)",
    },
    {
      id: 5,
      question:
        "Quelles sont les conditions minimales pour mettre un téléphone en vente sur notre plateforme ?",
      answer:
        "Pour mettre un téléphone en vente sur notre plateforme, il doit respecter les conditions minimales suivantes : Système d'exploitation : Android 8 ou version ultérieure, RAM : Au moins 2 Go de mémoire vive pour assurer des performances fluides, Mémoire interne : Un espace de stockage d'au moins 16 Go pour permettre le stockage des applications et des données, écran : Un écran d'au moins 4 pouces pour une expérience utilisateur confortable, connectivité : Prise en charge de la connectivité 4G pour des vitesses de données rapides, Accessoires inclus : Le téléphone doit être fourni avec un chargeur et un câble pour faciliter son utilisation par l'acheteur.",
    },
  ];

  const handleQuestionClick = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <div className="FAQ">
      <header className="header">
        <img src="../src/images/logoremmaus.png" alt="Logo" className="logo" />
      </header>
      <div className="content">
        <h1 className="title">FAQ</h1>
        {questions.map((q) => (
          <div
            className={`question ${
              expandedQuestion === q.id ? "expanded" : ""
            }`}
            key={q.id}
            onClick={() => handleQuestionClick(q.id)}
            onKeyDown={(event) =>
              event.key === "Enter" && handleQuestionClick(q.id)
            }
            role="button"
            tabIndex={0}
          >
            <h2>{q.question}</h2>
            {expandedQuestion === q.id && <p>{q.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
