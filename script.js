alert( "Bien venu dans notre programme Qui Booste votre Motivatoin journaliere au Zenith !! ");
        let userName= prompt("Quel est votre prenom");
        userName;
        let userAge= prompt("quel age avez vous ?");
        userAge;

    //     let aleatoire = Math.floor(Math.random()* 1);
    //             switch (aleatoire) {
    //                     case 0:
        
    //                     let sage1= (" « Vous pouvez obtenir tout ce que vous désirez dans la vie si vous aidez suffisamment de personnes à obtenir ce qu'elles veulent. » — Une citation motivante de Zig Ziglar ")
    //                     sage1
    //                     switch (aleatoire) {
    //                     case Number (userAge)> 0 && Number (userAge) <= 25 :
    //                       if (Number (userAge)> 0 && Number (userAge) <= 25){
    //                         alert( userName + " , " + sage1 + " , " + "n'est ce pas une tres tres belle  citation à connaitre à " + Number (userAge) +  " ans !" );
    //                       }
    //                     break;

    let aleatoire = Math.floor(Math.random() * 21);
        
    //                     case Number (userAge) > 25 && Number (userAge) <= 50 :
    //                       if (Number (userAge) > 25 && Number (userAge) <= 50){
    //                         alert( userName + " , " + sage1 + " , " + " Genial citation à connaitre maintenant que tu as " + Number (userAge) +  " ans !" );
    //                       }
    //                     break;
                          
    //                     case (Number (userAge) > 50 && Number (userAge) <= 150):
    //                       if (Number (userAge) > 50 && Number (userAge) <= 150){
    //                         alert( " WOW !! " + userName + " , " + sage1 + " , " + " à " + Number (userAge) + " ans !" + " n'est ce pas une sagesse inestimable, alors que les jours passent !!! ");
    //                       }
    //                     break;
        
    //                     default:
    //                       alert( " Uuuups!!!   Nous ne prenons que les valeurs entrées qu'en nombres Entiers ! rechargez la page, Réesayez avec votre age Véritable  en Nombre Entiers, Merci de nous faire confiance ! ");
    //     }
    // }


    let aleatoire = Math.floor(Math.random() * 21);
    switch (aleatoire) {
        case 0:
          let sage1 = "« Vous pouvez obtenir tout ce que vous désirez dans la vie si vous aidez suffisamment de personnes à obtenir ce qu'elles veulent. » — Une citation motivante de Zig Ziglar";
      
          switch (true) {
            case Number(userAge) > 0 && Number(userAge) <= 25:
              alert( " ' " + userName + "!! ' " + ", " + sage1 + ", n'est-ce pas une très belle citation à connaître à " + Number(userAge) + " ans !?");
              break;
      
            case Number(userAge) > 25 && Number(userAge) <= 50:
              alert( " ' " + userName + "!! ' " + ", " + sage1 + ", Géniale citation à connaître maintenant que tu as " + Number(userAge) + " ans !?");
              break;
      
            case Number(userAge) > 50 && Number(userAge) <= 150:
              alert("WOW !! " + " ' " + userName + "!! ' "  + ", " + sage1 + " à " + Number(userAge) + " ans! N'est-ce pas une sagesse inestimable, alors que les jours passent !!!");
              break;
      
            default:
              alert("Uuuups!!! Nous ne prenons que les valeurs entrées qu'en nombres entiers! Rechargez la page, réessayez avec votre âge véritable en nombres entiers. Merci de nous faire confiance !");
              break;
          };


          case 1:                
    let sage2=" « L'inspiration existe, mais il faut qu'elle vous trouve au travail. » — Une citation de sagesse de Pablo Picasso "

    switch (true) {
      case Number(userAge) > 0 && Number(userAge) <= 25:
        alert( " ' " + userName + "!! ' " + ", " + sage2 + ", n'est-ce pas une très belle citation à connaître à " + Number(userAge) + " ans !?");
        break;

      case Number(userAge) > 25 && Number(userAge) <= 50:
        alert( " ' " + userName + "!! ' " + ", " + sage2 + ", Géniale citation à connaître maintenant que tu as " + Number(userAge) + " ans !?");
        break;

      case Number(userAge) > 50 && Number(userAge) <= 150:
        alert("WOW !! " + " ' " + userName + "!! ' "  + ", " + sage2 + " à " + Number(userAge) + " ans! N'est-ce pas une sagesse inestimable, alors que les jours passent !!!");
        break;

      default:
        alert("Uuuups!!! Nous ne prenons que les valeurs entrées qu'en nombres entiers! Rechargez la page, réessayez avec votre âge véritable en nombres entiers. Merci de nous faire confiance !");
        break;
      };

      case 2:
    let sage3= " « La vie est un défi à relever, un bonheur à mériter, une aventure à tenter. » — une citation positive de Mère Teresa, missionnaire en Inde ";
        
      switch (true) {
        case Number(userAge) > 0 && Number(userAge) <= 25:
          alert( " ' " + userName + "!! ' " + ", " + sage3 + ", n'est-ce pas une très belle citation à connaître à " + Number(userAge) + " ans !?");
          break;

        case Number(userAge) > 25 && Number(userAge) <= 50:
          alert( " ' " + userName + "!! ' " + ", " + sage3 + ", Géniale citation à connaître maintenant que tu as " + Number(userAge) + " ans !?");
          break;

        case Number(userAge) > 50 && Number(userAge) <= 150:
          alert("WOW !! " + " ' " + userName + "!! ' "  + ", " + sage3 + " à " + Number(userAge) + " ans! N'est-ce pas une sagesse inestimable, alors que les jours passent !!!");
          break;

        default:
        alert("Uuuups!!! Nous ne prenons que les valeurs entrées qu'en nombres entiers! Rechargez la page, réessayez avec votre âge véritable en nombres entiers. Merci de nous faire confiance !");
        break;
      };
    break
