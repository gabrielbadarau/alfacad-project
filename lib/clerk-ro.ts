import type { LocalizationResource } from '@clerk/types';

const commonTexts = {
  signIn: {
    phoneCode: {
      title: 'Verifică-ți telefonul',
      subtitle: 'pentru a continua către {{applicationName}}',
      formTitle: 'Cod de verificare',
      formSubtitle:
        'Introduceți codul de verificare trimis la numărul dvs. de telefon',
      resendButton: 'Nu ați primit codul? Retrimiteți',
    },
  },
} as const;

export const romanianClerk: LocalizationResource = {
  locale: 'ro-RO',
  socialButtonsBlockButton: 'Continuă cu {{provider|titleize}}',
  dividerText: 'sau',
  formFieldLabel__emailAddress: 'Adresă de email',
  formFieldLabel__emailAddresses: 'Adrese de email',
  formFieldLabel__phoneNumber: 'Număr de telefon',
  formFieldLabel__username: 'Nume de utilizator',
  formFieldLabel__emailAddress_phoneNumber:
    'Adresă de email sau număr de telefon',
  formFieldLabel__emailAddress_username:
    'Adresă de email sau nume de utilizator',
  formFieldLabel__phoneNumber_username:
    'Număr de telefon sau nume de utilizator',
  formFieldLabel__emailAddress_phoneNumber_username:
    'Adresă de email, număr de telefon sau nume de utilizator',
  formFieldLabel__password: 'Parolă',
  formFieldLabel__currentPassword: 'Parola actuală',
  formFieldLabel__newPassword: 'Parolă nouă',
  formFieldLabel__confirmPassword: 'Confirmă parola',
  formFieldLabel__signOutOfOtherSessions:
    'Deconectează-te de pe toate celelalte dispozitive',
  formFieldLabel__firstName: 'Prenume',
  formFieldLabel__lastName: 'Nume de familie',
  formFieldLabel__backupCode: 'Cod de rezervă',
  formFieldLabel__organizationName: 'Nume organizație',
  formFieldLabel__organizationSlug: 'URL slug',
  formFieldLabel__confirmDeletion: 'Confirmare',
  formFieldLabel__role: 'Rol',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddresses:
    'Introduceți sau lipiți una sau mai multe adrese de email, separate prin spații sau virgule',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__phoneNumber_username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber_username: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',

  formFieldError__notMatchingPasswords: 'Parolele nu se potrivesc.',
  formFieldError__matchingPasswords: 'Parolele se potrivesc.',
  formFieldAction__forgotPassword: 'Ai uitat parola?',
  formFieldHintText__optional: 'Opțional',
  formButtonPrimary: 'Continuă',
  signInEnterPasswordTitle: 'Introduceți parola',
  backButton: 'Înapoi',
  footerActionLink__useAnotherMethod: 'Utilizați o altă metodă',
  badge__primary: 'Principal',
  badge__thisDevice: 'Acest dispozitiv',
  badge__userDevice: 'Dispozitivul utilizatorului',
  badge__otherImpersonatorDevice: 'Alt dispozitiv de impersonare',
  badge__default: 'Implicit',
  badge__unverified: 'Neconfirmat',
  badge__requiresAction: 'Necesită acțiune',
  badge__you: 'Tu',
  footerPageLink__help: 'Ajutor',
  footerPageLink__privacy: 'Confidențialitate',
  footerPageLink__terms: 'Termeni și condiții',
  paginationButton__previous: 'Anterior',
  paginationButton__next: 'Următor',
  paginationRowText__displaying: 'Se afișează',
  paginationRowText__of: 'din',
  membershipRole__admin: 'Admin',
  membershipRole__basicMember: 'Membru',
  membershipRole__guestMember: 'Vizitator',
  signUp: {
    start: {
      title: 'Creează-ți contul',
      subtitle: 'pentru a continua către {{applicationName}}',
      actionText: 'Ai deja un cont?',
      actionLink: 'Conectează-te',
    },
    emailLink: {
      title: 'Verifică-ți adresa de email',
      subtitle: 'pentru a continua către {{applicationName}}',
      formTitle: 'Link de verificare',
      formSubtitle:
        'Utilizează linkul de verificare trimis la adresa ta de email',
      resendButton: 'Nu ai primit linkul? Retrimite',
      verified: {
        title: 'Înregistrare reușită',
      },
      loading: {
        title: 'Se înregistrează...',
      },
      verifiedSwitchTab: {
        title: 'Email verificat cu succes',
        subtitle: 'Reveniți la fila deschisă recent pentru a continua',
        subtitleNewTab: 'Reveniți la fila anterioară pentru a continua',
      },
    },
    emailCode: {
      title: 'Verifică-ți adresa de email',
      subtitle: 'pentru a continua către {{applicationName}}',
      formTitle: 'Cod de verificare',
      formSubtitle: 'Introdu codul de verificare trimis la adresa ta de email',
      resendButton: 'Nu ai primit un cod? Retrimite',
    },
    phoneCode: {
      title: 'Verifică-ți numărul de telefon',
      subtitle: 'pentru a continua către {{applicationName}}',
      formTitle: 'Cod de verificare',
      formSubtitle:
        'Introduceți codul de verificare trimis la numărul dvs. de telefon',
      resendButton: 'Nu ați primit un cod? Retrimiteți',
    },
    continue: {
      title: 'Completează câmpurile lipsă',
      subtitle: 'pentru a continua către {{applicationName}}',
      actionText: 'Ai deja un cont?',
      actionLink: 'Conectează-te',
    },
  },
  signIn: {
    start: {
      title: 'Conectează-te',
      subtitle: 'pentru a continua către {{applicationName}}',
      actionText: 'Nu ai un cont?',
      actionLink: 'Înregistrează-te',
      actionLink__use_email: 'Folosește adresa de email',
      actionLink__use_phone: 'Folosește numărul de telefon',
      actionLink__use_username: 'Folosește numele de utilizator',
      actionLink__use_email_username:
        'Folosește adresa de email sau numele de utilizator',
    },
    password: {
      title: 'Introdu parola ta',
      subtitle: 'pentru a continua către {{applicationName}}',
      actionLink: 'Folosește o altă metodă',
    },
    forgotPasswordAlternativeMethods: {
      title: 'Ai uitat parola?',
      label__alternativeMethods: 'Sau, conectează-te cu o altă metodă.',
      blockButton__resetPassword: 'Resetează parola',
    },
    forgotPassword: {
      title_email: 'Verifică-ți adresa de email',
      title_phone: 'Verifică-ți numărul de telefon',
      subtitle: 'pentru a reseta parola',
      formTitle: 'Cod pentru resetarea parolei',
      formSubtitle_email: 'Introdu codul trimis la adresa ta de email',
      formSubtitle_phone: 'Introdu codul trimis la numărul tău de telefon',
      resendButton: 'Nu ai primit un cod? Retrimite',
    },
    resetPassword: {
      title: 'Resetează parola',
      formButtonPrimary: 'Resetează parola',
      successMessage:
        'Parola ta a fost schimbată cu succes. Te conectăm, te rog așteaptă un moment.',
    },
    resetPasswordMfa: {
      detailsLabel:
        'Trebuie să-ți verificăm identitatea înainte de a reseta parola.',
    },
    emailCode: {
      title: 'Verifică-ți adresa de email',
      subtitle: 'pentru a continua către {{applicationName}}',
      formTitle: 'Cod de verificare',
      formSubtitle: 'Introdu codul de verificare trimis la adresa ta de email',
      resendButton: 'Nu ai primit un cod? Retrimite',
    },
    emailLink: {
      title: 'Verifică-ți adresa de email',
      subtitle: 'pentru a continua către {{applicationName}}',
      formTitle: 'Link de verificare',
      formSubtitle:
        'Folosește linkul de verificare trimis la adresa ta de email',
      resendButton: 'Nu ai primit un link? Retrimite',
      unusedTab: {
        title: 'Poți închide această filă',
      },
      verified: {
        title: 'Autentificare reușită',
        subtitle: 'Vei fi redirecționat în curând',
      },
      verifiedSwitchTab: {
        subtitle: 'Reveniți la filă originală pentru a continua',
        titleNewTab: 'Conectat în altă filă',
        subtitleNewTab: 'Reveniți la filă pentru a continua',
      },
      loading: {
        title: 'Se autentifică...',
        subtitle: 'Vei fi redirecționat în curând',
      },
      failed: {
        title: 'Acest link de verificare este invalid',
        subtitle: 'Reveniți la filă pentru a continua.',
      },
      expired: {
        title: 'Acest link de verificare a expirat',
        subtitle: 'Reveniți la filă pentru a continua.',
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: '' },
    totpMfa: {
      title: 'Verificare în două etape',
      subtitle: '',
      formTitle: 'Cod de verificare',
      formSubtitle:
        'Introduceți codul de verificare generat de aplicația dvs. de autentificare',
    },
    backupCodeMfa: {
      title: 'Introduceți un cod de rezervă',
      subtitle: 'pentru a continua către {{applicationName}}',
      formTitle: '',
      formSubtitle: '',
    },
    alternativeMethods: {
      title: 'Folosește o altă metodă',
      actionLink: 'Obține ajutor',
      blockButton__emailLink: 'Trimite link la {{identifier}}',
      blockButton__emailCode: 'Trimite cod prin email la {{identifier}}',
      blockButton__phoneCode: 'Trimite cod SMS la {{identifier}}',
      blockButton__password: 'Conectează-te cu parola ta',
      blockButton__totp: 'Folosește aplicația ta de autentificare',
      blockButton__backupCode: 'Folosește un cod de rezervă',
      getHelp: {
        title: 'Obține ajutor',
        content: `Dacă întâmpinați dificultăți în a vă conecta la contul dvs., trimiteți-ne un email și vom colabora cu dvs. pentru a vă reda accesul cât mai curând posibil.`,
        blockButton__emailSupport: 'Email suport',
      },
    },
    noAvailableMethods: {
      title: 'Nu se poate realiza conectarea',
      subtitle: 'A apărut o eroare',
      message:
        'Nu se poate continua cu conectarea. Nu există o metodă de autentificare disponibilă.',
    },
  },
  userProfile: {
    mobileButton__menu: 'Meniu',
    formButtonPrimary__continue: 'Continuă',
    formButtonPrimary__finish: 'Finalizează',
    formButtonReset: 'Anulează',
    start: {
      headerTitle__account: 'Cont',
      headerTitle__security: 'Securitate',
      headerSubtitle__account: 'Gestionează informațiile contului tău',
      headerSubtitle__security: 'Gestionează preferințele de securitate',
      profileSection: {
        title: 'Profil',
      },
      usernameSection: {
        title: 'Nume de utilizator',
        primaryButton__changeUsername: 'Schimbă numele de utilizator',
        primaryButton__setUsername: 'Setează numele de utilizator',
      },
      emailAddressesSection: {
        title: 'Adrese de email',
        primaryButton: 'Adaugă o adresă de email',
        detailsTitle__primary: 'Adresă de email principală',
        detailsSubtitle__primary: 'Aceasta este adresa de email principală',
        detailsAction__primary: 'Finalizează verificarea',
        detailsTitle__nonPrimary: 'Setează ca adresă de email principală',
        detailsSubtitle__nonPrimary:
          'Setează această adresă de email ca principală pentru a primi comunicări legate de contul tău.',
        detailsAction__nonPrimary: 'Setează ca principală',
        detailsTitle__unverified: 'Adresă de email neverificată',
        detailsSubtitle__unverified:
          'Această adresă de email nu a fost verificată și poate avea funcționalitate limitată',
        detailsAction__unverified: 'Finalizează verificarea',
        destructiveActionTitle: 'Elimină',
        destructiveActionSubtitle:
          'Șterge această adresă de email și elimină-o din contul tău',
        destructiveAction: 'Elimină adresa de email',
      },
      phoneNumbersSection: {
        title: 'Numere de telefon',
        primaryButton: 'Adaugă un număr de telefon',
        detailsTitle__primary: 'Număr de telefon principal',
        detailsSubtitle__primary:
          'Acest număr de telefon este numărul de telefon principal',
        detailsAction__primary: 'Finalizează verificarea',
        detailsTitle__nonPrimary: 'Setează ca număr de telefon principal',
        detailsSubtitle__nonPrimary:
          'Setează acest număr de telefon ca principal pentru a primi comunicări legate de contul tău.',
        detailsAction__nonPrimary: 'Setează ca principal',
        detailsTitle__unverified: 'Număr de telefon neverificat',
        detailsSubtitle__unverified:
          'Acest număr de telefon nu a fost verificat și poate avea funcționalitate limitată',
        detailsAction__unverified: 'Finalizează verificarea',
        destructiveActionTitle: 'Elimină',
        destructiveActionSubtitle:
          'Șterge acest număr de telefon și elimină-l din contul tău',
        destructiveAction: 'Elimină numărul de telefon',
      },
      connectedAccountsSection: {
        title: 'Conturi conectate',
        primaryButton: 'Conectează cont',
        title__conectionFailed: 'Reîncearcă conexiunea eșuată',
        title__connectionFailed: 'Reîncearcă conexiunea eșuată',
        title__reauthorize: 'Necesită reautorizare',
        subtitle__reauthorize:
          'Scopurile necesare au fost actualizate, iar tu poți avea funcționalitate limitată. Te rugăm să reautorizezi această aplicație pentru a evita problemele.',
        actionLabel__conectionFailed: 'Încearcă din nou',
        actionLabel__connectionFailed: 'Încearcă din nou',
        actionLabel__reauthorize: 'Autorizează acum',
        destructiveActionTitle: 'Elimină',
        destructiveActionSubtitle: 'Șterge acest cont conectat din contul tău',
        destructiveActionAccordionSubtitle: 'Elimină contul conectat',
      },
      enterpriseAccountsSection: {
        title: 'Conturi de întreprindere',
      },
      passwordSection: {
        title: 'Parolă',
        primaryButton__changePassword: 'Schimbă parola',
        primaryButton__setPassword: 'Setează parola',
      },
      mfaSection: {
        title: 'Verificare în două etape',
        primaryButton: 'Adaugă verificare în două etape',
        phoneCode: {
          destructiveActionTitle: 'Elimină',
          destructiveActionSubtitle:
            'Șterge acest număr de telefon din metodele de verificare în două etape',
          destructiveActionLabel: 'Elimină numărul de telefon',
          title__default: 'Factor implicit',
          title__setDefault: 'Setează ca factor implicit',
          subtitle__default:
            'Acest factor va fi folosit ca metodă implicită de verificare în două etape la autentificare.',
          subtitle__setDefault:
            'Setează acest factor ca metodă implicită pentru a-l folosi ca metodă implicită de verificare în două etape la autentificare.',
          actionLabel__setDefault: 'Setează ca implicit',
        },
        backupCodes: {
          headerTitle: 'Coduri de rezervă',
          title__regenerate: 'Regenerează coduri de rezervă',
          subtitle__regenerate:
            'Primește un set proaspăt de coduri de rezervă securizate. Codurile anterioare vor fi șterse și nu vor mai putea fi folosite.',
          actionLabel__regenerate: 'Regenerează codurile',
        },
        totp: {
          headerTitle: 'Aplicație autentificare',
          title: 'Factor implicit',
          subtitle:
            'Acest factor va fi folosit ca metodă implicită de verificare în două etape la autentificare.',
          destructiveActionTitle: 'Elimină',
          destructiveActionSubtitle:
            'Șterge aplicația autentificare din metodele de verificare în două etape',
          destructiveActionLabel: 'Elimină aplicația autentificare',
        },
      },
      activeDevicesSection: {
        title: 'Dispozitive active',
        primaryButton: 'Dispozitive active',
        detailsTitle: 'Dispozitiv curent',
        detailsSubtitle:
          'Acesta este dispozitivul pe care îl folosești în prezent',
        destructiveActionTitle: 'Deconectează',
        destructiveActionSubtitle:
          'Deconectează-te din contul tău pe acest dispozitiv',
        destructiveAction: 'Deconectează-te de pe dispozitiv',
      },
      web3WalletsSection: {
        title: 'Portofele Web3',
        primaryButton: 'Portofele Web3',
        destructiveActionTitle: 'Elimină',
        destructiveActionSubtitle: 'Șterge acest portofel Web3 din contul tău',
        destructiveAction: 'Elimină portofelul',
      },
      dangerSection: {
        title: 'Pericol',
        deleteAccountButton: 'Șterge contul',
        deleteAccountTitle: 'Șterge contul',
        deleteAccountDescription:
          'Șterge contul tău și toate datele asociate acestuia',
      },
    },
    profilePage: {
      title: 'Actualizare profil',
      imageFormTitle: 'Imagine de profil',
      imageFormSubtitle: 'Încărcați imaginea',
      imageFormDestructiveActionSubtitle: 'Eliminați imaginea',
      fileDropAreaTitle: 'Trageți fișierul aici sau...',
      fileDropAreaAction: 'Selectați fișierul',
      fileDropAreaHint:
        'Încărcați o imagine JPG, PNG, GIF sau WEBP mai mică de 10 MB',
      readonly:
        'Informațiile despre profilul dumneavoastră au fost furnizate de conexiunea la întreprindere și nu pot fi editate.',
      successMessage: 'Profilul dumneavoastră a fost actualizat.',
    },
    usernamePage: {
      title: 'Actualizare nume de utilizator',
      successMessage: 'Numele de utilizator a fost actualizat.',
    },
    emailAddressPage: {
      title: 'Adăugare adresă de email',
      emailCode: {
        formHint:
          'Un email conținând un cod de verificare va fi trimis la această adresă de email.',
        formTitle: 'Cod de verificare',
        formSubtitle:
          'Introduceți codul de verificare trimis la {{identifier}}',
        resendButton: 'Nu ați primit un cod? Retrimiteți',
        successMessage:
          'Adresa de email {{identifier}} a fost adăugată în contul dumneavoastră.',
      },
      emailLink: {
        formHint:
          'Un email conținând un link de verificare va fi trimis la această adresă de email.',
        formTitle: 'Link de verificare',
        formSubtitle:
          'Faceți clic pe link-ul de verificare din emailul trimis la {{identifier}}',
        resendButton: 'Nu ați primit un link? Retrimiteți',
        successMessage:
          'Adresa de email {{identifier}} a fost adăugată în contul dumneavoastră.',
      },
      removeResource: {
        title: 'Eliminare adresă de email',
        messageLine1: '{{identifier}} va fi eliminat din acest cont.',
        messageLine2:
          'Nu veți mai putea să vă autentificați folosind această adresă de email.',
        successMessage:
          '{{emailAddress}} a fost eliminată din contul dumneavoastră.',
      },
    },
    phoneNumberPage: {
      title: 'Adăugare număr de telefon',
      successMessage: '{{identifier}} a fost adăugat în contul dumneavoastră.',
      infoText:
        'Un mesaj text conținând un link de verificare va fi trimis la acest număr de telefon.',
      infoText__secondary: 'S-ar putea aplica tarife pentru mesaje și date.',
      removeResource: {
        title: 'Eliminare număr de telefon',
        messageLine1: '{{identifier}} va fi eliminat din acest cont.',
        messageLine2:
          'Nu veți mai putea să vă autentificați folosind acest număr de telefon.',
        successMessage:
          '{{phoneNumber}} a fost eliminat din contul dumneavoastră.',
      },
    },
    connectedAccountPage: {
      title: 'Adăugare cont conectat',
      formHint: 'Selectați un furnizor pentru a conecta contul dvs.',
      formHint__noAccounts: 'Nu există furnizori de cont disponibili.',
      socialButtonsBlockButton: 'Conectează contul {{provider|titleize}}',
      successMessage: 'Furnizorul a fost adăugat în contul dumneavoastră',
      removeResource: {
        title: 'Eliminare cont conectat',
        messageLine1: '{{identifier}} va fi eliminat din acest cont.',
        messageLine2:
          'Nu veți mai putea utiliza acest cont conectat și orice caracteristici dependente nu vor mai funcționa.',
        successMessage:
          '{{connectedAccount}} a fost eliminat din contul dumneavoastră.',
      },
    },
    web3WalletPage: {
      title: 'Adăugare portofel Web3',
      subtitle__availableWallets:
        'Selectați un portofel Web3 pentru a conecta contul dvs.',
      subtitle__unavailableWallets: 'Nu există portofele Web3 disponibile.',
      successMessage: 'Portofelul a fost adăugat în contul dumneavoastră.',
      removeResource: {
        title: 'Eliminare portofel Web3',
        messageLine1: '{{identifier}} va fi eliminat din acest cont.',
        messageLine2:
          'Nu veți mai putea să vă autentificați folosind acest portofel Web3.',
        successMessage:
          '{{web3Wallet}} a fost eliminat din contul dumneavoastră.',
      },
    },
    passwordPage: {
      title: 'Setare parolă',
      changePasswordTitle: 'Schimbare parolă',
      readonly:
        'Parola dumneavoastră nu poate fi editată în prezent, deoarece puteți să vă autentificați doar prin conexiunea enterprise.',
      successMessage: 'Parola dumneavoastră a fost setată.',
      changePasswordSuccessMessage: 'Parola dumneavoastră a fost actualizată.',
      sessionsSignedOutSuccessMessage:
        'Toate celelalte dispozitive au fost deconectate.',
    },
    mfaPage: {
      title: 'Adăugare verificare în două etape',
      formHint: 'Selectați o metodă pentru a adăuga.',
    },
    mfaTOTPPage: {
      title: 'Adăugare aplicație de autentificare',
      verifyTitle: 'Cod de verificare',
      verifySubtitle:
        'Introduceți codul de verificare generat de aplicația de autentificare',
      successMessage:
        'Verificarea în două etape este acum activată. La autentificare, va trebui să introduceți un cod de verificare din această aplicație de autentificare ca etapă suplimentară.',
      authenticatorApp: {
        infoText__ableToScan:
          'Configurați o nouă metodă de autentificare în aplicația dumneavoastră de autentificare și scanați codul QR de mai jos pentru a-l lega de contul dumneavoastră.',
        infoText__unableToScan:
          'Configurați o nouă metodă de autentificare în aplicația dumneavoastră de autentificare și introduceți cheia furnizată mai jos.',
        inputLabel__unableToScan1:
          'Asigurați-vă că parola bazată pe timp sau parola unică este activată, apoi finalizați legarea contului.',
        inputLabel__unableToScan2:
          'Alternativ, dacă aplicația dumneavoastră de autentificare suportă URIs TOTP, puteți copia și URI-ul complet.',
        buttonAbleToScan__nonPrimary: 'Scanați codul QR în schimb',
        buttonUnableToScan__nonPrimary: 'Nu puteți scana codul QR?',
      },
      removeResource: {
        title: 'Eliminare verificare în două etape',
        messageLine1:
          'Codurile de verificare din această aplicație de autentificare nu vor mai fi necesare la autentificare.',
        messageLine2:
          'Contul dumneavoastră poate să nu mai fie la fel de sigur. Sunteți sigur că doriți să continuați?',
        successMessage:
          'Verificarea în două etape prin intermediul aplicației de autentificare a fost eliminată.',
      },
    },
    mfaPhoneCodePage: {
      title: 'Adăugare verificare prin cod SMS',
      primaryButton__addPhoneNumber: 'Adăugați un număr de telefon',
      subtitle__availablePhoneNumbers:
        'Selectați un număr de telefon pentru a vă înregistra pentru verificarea în două etape prin cod SMS.',
      subtitle__unavailablePhoneNumbers:
        'Nu există numere de telefon disponibile pentru înregistrarea pentru verificarea în două etape prin cod SMS.',
      successMessage:
        'Verificarea în două etape prin cod SMS este acum activată pentru acest număr de telefon. La autentificare, va trebui să introduceți un cod de verificare trimis la acest număr de telefon ca etapă suplimentară.',
      removeResource: {
        title: 'Eliminare verificare în două etape',
        messageLine1:
          '{{identifier}} nu va mai primi coduri de verificare la autentificare.',
        messageLine2:
          'Contul dumneavoastră poate să nu mai fie la fel de sigur. Sunteți sigur că doriți să continuați?',
        successMessage:
          'Verificarea în două etape prin cod SMS a fost eliminată pentru {{mfaPhoneCode}}',
      },
    },
    backupCodePage: {
      title: 'Adăugare verificare prin coduri de rezervă',
      title__codelist: 'Coduri de rezervă',
      subtitle__codelist: 'Păstrați-le în siguranță și țineți-le secrete.',
      infoText1: 'Codurile de rezervă vor fi activate pentru acest cont.',
      infoText2:
        'Păstrați codurile de rezervă în siguranță și stocați-le într-un loc sigur. Le puteți regenera dacă bănuiți că au fost compromiși.',
      successSubtitle:
        'Puteți utiliza unul dintre acestea pentru a vă autentifica în contul dumneavoastră, dacă pierdeți accesul la dispozitivul de autentificare.',
      successMessage:
        'Codurile de rezervă sunt acum activate. Puteți utiliza unul dintre acestea pentru a vă autentifica în contul dumneavoastră, dacă pierdeți accesul la dispozitivul de autentificare. Fiecare cod poate fi utilizat o singură dată.',
      actionLabel__copy: 'Copiați toate',
      actionLabel__copied: 'Copiat!',
      actionLabel__download: 'Descărcați .txt',
      actionLabel__print: 'Imprimare',
    },
    deletePage: {
      title: 'Ștergeți contul',
      messageLine1: 'Sunteți sigur că doriți să ștergeți contul dumneavoastră?',
      messageLine2: 'Această acțiune este permanentă și ireversibilă.',
      actionDescription:
        'Introduceți "Ștergeți contul" mai jos pentru a continua.',
      confirm: 'Ștergeți contul',
    },
  },
  userButton: {
    action__manageAccount: 'Administrează contul',
    action__signOut: 'Deconectează-te',
    action__signOutAll: 'Deconectează-te din toate conturile',
    action__addAccount: 'Adaugă cont',
  },
  organizationSwitcher: {
    personalWorkspace: 'Spațiu Personal',
    notSelected: 'Nicio organizație selectată',
    action__createOrganization: 'Creează Organizație',
    action__manageOrganization: 'Administrează Organizația',
  },
  impersonationFab: {
    title: 'Autentificat ca {{identifier}}',
    action__signOut: 'Deconectare',
  },
  organizationProfile: {
    start: {
      headerTitle__members: 'Membri',
      headerTitle__settings: 'Setări',
      headerSubtitle__members: 'Vizualizați și gestionați membrii organizației',
      headerSubtitle__settings: 'Gestionați setările organizației',
    },
    profilePage: {
      title: 'Profil Organizație',
      subtitle: 'Gestionați profilul organizației',
      successMessage: 'Organizația a fost actualizată.',
      dangerSection: {
        title: 'Pericol',
        leaveOrganization: {
          title: 'Părăsiți organizația',
          messageLine1:
            'Sunteți sigur că doriți să părăsiți această organizație? Veți pierde accesul la această organizație și la aplicațiile sale.',
          messageLine2: 'Această acțiune este permanentă și ireversibilă.',
          successMessage: 'Ați părăsit organizația.',
          actionDescription:
            'Introduceți {{organizationName}} mai jos pentru a continua.',
        },
        deleteOrganization: {
          title: 'Ștergeți organizația',
          messageLine1:
            'Sunteți sigur că doriți să ștergeți această organizație?',
          messageLine2: 'Această acțiune este permanentă și ireversibilă.',
          actionDescription:
            'Introduceți {{organizationName}} mai jos pentru a continua.',
          successMessage: 'Ați șters organizația.',
        },
      },
    },
    invitePage: {
      title: 'Invită membri',
      subtitle: 'Invită membri noi în această organizație',
      successMessage: 'Invitațiile au fost trimise cu succes',
      detailsTitle__inviteFailed:
        'Invitațiile nu au putut fi trimise. Remediați următoarele și încercați din nou:',
      formButtonPrimary__continue: 'Trimiteți invitațiile',
    },
    membersPage: {
      detailsTitle__emptyRow: 'Niciun membru de afișat',
      action__invite: 'Invită',
      start: {
        headerTitle__active: 'Activi',

        headerTitle__invited: 'Invitați',
      },
      activeMembersTab: {
        tableHeader__user: 'Utilizator',
        tableHeader__joined: 'Alăturat',
        tableHeader__role: 'Rol',
        tableHeader__actions: '',
        menuAction__remove: 'Elimină membru',
      },
      invitedMembersTab: {
        tableHeader__invited: 'Invitați',
        menuAction__revoke: 'Revocă invitația',
      },
    },
  },
  createOrganization: {
    title: 'Creați Organizația',
    formButtonSubmit: 'Creați organizația',
    subtitle: 'Setați profilul organizației',
    invitePage: {
      formButtonReset: 'Omiteți',
    },
  },
  unstable__errors: {
    identification_deletion_failed: 'Nu puteți șterge ultima identificare.',
    phone_number_exists:
      'Acest număr de telefon este deja folosit. Vă rugăm să încercați alt număr.',
    form_identifier_not_found: '',
    captcha_invalid:
      'Înregistrarea nu a reușit din cauza validărilor de securitate eșuate. Vă rugăm să reîmprospătați pagina pentru a încerca din nou sau contactați asistența pentru mai multă ajutor.',
    form_password_pwned:
      'Această parolă a fost găsită ca parte a unei încălcări de securitate și nu poate fi utilizată, vă rugăm să încercați o altă parolă.',
    form_username_invalid_length: '',
    form_username_invalid_character: '',
    form_param_format_invalid: '',
    form_param_format_invalid__email_address:
      'Adresa de email trebuie să fie o adresă de email validă.',
    form_password_length_too_short: '',
    form_param_nil: '',
    form_code_incorrect: '',
    form_password_incorrect: '',
    not_allowed_access: '',
    form_identifier_exists: '',
    form_password_validation_failed: 'Parola incorectă',
    form_password_not_strong_enough:
      'Parola dumneavoastră nu este suficient de puternică.',
    form_password_size_in_bytes_exceeded:
      'Parola dumneavoastră a depășit numărul maxim de octeți permis, vă rugăm să o scurtați sau să eliminați unele caractere speciale.',
    passwordComplexity: {
      sentencePrefix: 'Parola dumneavoastră trebuie să conțină',
      minimumLength: 'cel puțin {{length}} caractere',
      maximumLength: 'mai puțin de {{length}} caractere',
      requireNumbers: 'o cifră',
      requireLowercase: 'o literă mică',
      requireUppercase: 'o literă mare',
      requireSpecialCharacter: 'un caracter special',
    },
    zxcvbn: {
      notEnough: 'Parola dumneavoastră nu este suficient de puternică.',
      couldBeStronger:
        'Parola dumneavoastră funcționează, dar ar putea fi mai puternică. Încercați să adăugați mai multe caractere.',
      goodPassword:
        'Parola dumneavoastră îndeplinește toate cerințele necesare.',
      warnings: {
        straightRow:
          'Rânduri drepte de taste de pe tastatură sunt ușor de ghicit.',
        keyPattern:
          'Modele scurte de taste de pe tastatură sunt ușor de ghicit.',
        simpleRepeat: 'Caracterele repetate precum "aaa" sunt ușor de ghicit.',
        extendedRepeat:
          'Modele repetate de caractere precum "abcabcabc" sunt ușor de ghicit.',
        sequences:
          'Secvențe comune de caractere precum "abc" sunt ușor de ghicit.',
        recentYears: 'Ani recenti sunt ușor de ghicit.',
        dates: 'Datele sunt ușor de ghicit.',
        topTen: 'Aceasta este o parolă folosită frecvent.',
        topHundred: 'Aceasta este o parolă folosită frecvent.',
        common: 'Aceasta este o parolă folosită frecvent.',
        similarToCommon: 'Aceasta este similară cu o parolă folosită frecvent.',
        wordByItself: 'Cuvintele singulare sunt ușor de ghicit.',
        namesByThemselves:
          'Numele sau prenumele singulare sunt ușor de ghicit.',
        commonNames: 'Numele și prenumele comune sunt ușor de ghicit.',
        userInputs: 'Nu trebuie să existe date personale sau legate de pagină.',
        pwned:
          'Parola dumneavoastră a fost expusă printr-o încălcare de date pe internet.',
      },
      suggestions: {
        l33t: "Evitați substituțiile predecibile de litere precum '@' pentru 'a'.",
        reverseWords: 'Evitați ortografiile inversate ale cuvintelor comune.',
        allUppercase:
          'Literele majuscule sunt indicate pentru unele, dar nu toate literele.',
        capitalization: 'Majusculizați mai mult decât prima literă.',
        dates: 'Evitați datele și anii asociați cu dumneavoastră.',
        recentYears: 'Evitați anii recenti.',
        associatedYears: 'Evitați anii asociați cu dumneavoastră.',
        sequences: 'Evitați secvențele comune de caractere.',
        repeated: 'Evitați cuvintele și caracterele repetate.',
        longerKeyboardPattern:
          'Utilizați modele mai lungi de tastatură și schimbați direcția tastării de mai multe ori.',
        anotherWord: 'Adăugați mai multe cuvinte care nu sunt comune.',
        useWords: 'Utilizați mai multe cuvinte, dar evitați expresiile comune.',
        noNeed:
          'Puteți crea parole puternice fără a utiliza simboluri, cifre sau litere majuscule.',
        pwned:
          'Dacă utilizați această parolă și în alte locuri, ar trebui să o schimbați.',
      },
    },
    form_param_max_length_exceeded__name:
      'Numele nu trebuie să depășească 256 de caractere.',
    form_param_max_length_exceeded__first_name:
      'Prenumele nu trebuie să depășească 256 de caractere.',
    form_param_max_length_exceeded__last_name:
      'Numele de familie nu trebuie să depășească 256 de caractere.',
  },
  dates: {
    previous6Days:
      "Ultima {{ date | weekday('ro-RO','long') }} la {{ date | timeString('ro-RO') }}",
    lastDay: "Ieri la {{ date | timeString('ro-RO') }}",
    sameDay: "Astăzi la {{ date | timeString('ro-RO') }}",
    nextDay: "Mâine la {{ date | timeString('ro-RO') }}",
    next6Days:
      "{{ date | weekday('ro-RO','long') }} la {{ date | timeString('ro-RO') }}",
    numeric: "{{ date | numeric('ro-RO') }}",
  },
};
