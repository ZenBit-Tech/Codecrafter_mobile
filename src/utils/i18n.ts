import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      pageTitle: 'Example Page',
      name: 'Name',
      submitExample: 'Submit',
      greeting: 'Hello',

      companyName: 'COMPANY NAME',
      action: 'ACTIONS',
      noCompanies: 'No companies yet',
      search: {
        label: 'Search',
        placeholder: 'Search…',
        noResults: 'No companies found.',
      },
      button: {
        addNewCompany: '+ Add New Company',
        add: 'Add',
        update: 'Update',
        cancel: 'Cancel',
        close: 'Close',
      },
      modal: {
        addCompanyTitle: 'Add company',
        updateCompanyTitle: 'Update company',
        start: 'Start',
        cancel: 'Cancel',
      },
      form: {
        organizationName: 'Organization name',
        email: 'Email',
        validation: {
          companyNameRequired: "Company name can't be empty",
          emailRequired: "Email can't be empty",
          invalidEmail: 'String should be email',
          invalidData: 'Invalid data. Please check the fields.',
        },
      },
      checklist: {
        title: 'Ensure you have the required equipment:',
        items: {
          trolley: 'Trolley',
          smartphone: 'Smartphone',
          scale: 'Scale for weighing baggage',
          baggageCovers: 'Baggage covers',
          smartLock: 'Smartporters‘ Smart lock',
          cleanVest: 'Clean Vest with logos',
          idBadge: 'ID badge',
          prohibitedItemsList: 'Printed list of prohibited items with pictures',
        },
        warning:
          'Confirm you lock the transport vehicle securely, ensuring safety as required by the LBA.',
      },
      itemsBlock: {
        importantTitle: 'Important ❗',
        importantText: 'Count the number of baggage items and weigh them.',
        prohibitedItemsAlt: 'Prohibited items icon',
      },
      customerConfirmationBlock: {
        importantTitle: 'Important ❗',
        importantText: 'Count the number of baggage items and weigh them.',
        fullNameLabel: 'Full Name',
      },
      checkBaggageBlock: {
        bagTitle: 'Medium bag 1',
        bagDetails: 'Max 70 x 50 x 30 cm',
        weightLabel: 'Weight',
        importantTitle: 'Important ❗',
        importantText1: 'Count the number of baggage items and weigh them.',
        importantText2:
          '- If the number and weight match the booking details, confirm it.',
        importantText3:
          '- If discrepancies exist, inform the customer to adjust the weight.',
      },
      boardingPass: {
        titles: {
          boardingPassPage:
            'Ask for the customer’s Boarding pass and verify it against the booking information',
          identityVerificationPage:
            'Ask for the customer’s ID card or passport and verify the identity against the booking information',
          identityVerification: 'Identity Verification',
          preArrivalTitle:
            'Confirm you lock the transport vehicle securely, ensuring safety as required by the LBA.',
        },
        informProps: {
          flightInform: 'Flight information: ',
          departureDate: 'Departure date: ',
          customerName: 'Customer name: ',
          date: 'Date: ',
          time: 'Time: ',
          airport: 'Airport: ',
          flight: 'Flight: ',
          passportInform: 'Passport information: ',
        },
        passportUploaded: {
          uploaded: 'Uploaded',
          notUploaded: 'Not Uploaded',
        },
        confirmation: 'I confirm that information match',
        passUploaded: 'Boarding pass uploaded',
        actionPanel: {
          backBtn: 'Back',
          verifiedSuccessfully: 'Next',
          verificationFailed: 'Send to dispatcher',
          verifyBtn: 'Verify boarding pass',
          loadingBtn: 'Verification',
          identityVerified: 'Identity Verified',
          transporterLocked: 'Transporter Locked',
        },
        errors: {
          cantFindOrder: "Can't find order",
          passNotVerified: 'Boarding pass is NOT Verified',
          cantFindUser: "Can't find information about user",
        },
        success: {
          passVerified: 'Boarding pass Verified',
        },
      },
      company: {
        successMessage: 'Company created successfully',
        updateSuccessMessage: 'Company updated successfully',
        error: 'Failed to create company',
        updateError: 'Failed to update company',
      },
      altText: {
        logo: 'Logo',
        key: 'Key',
        lock: 'Lock',
        profilePicture: 'Profile Picture',
      },
      notFound: {
        header: 'Page Not Found',
        errorMessage: 'The page you are looking for does not exist.',
        button: 'Back to app',
      },
      auth: {
        loginLinkSuccess:
          'Message successfully sent to {{email}}, please check your email.',
        loginCodeFailure:
          'Failed to send the verification code. Please try again later.',
        userNotExistError:
          "User with this email doesn't exist. Please try again later.",
        unknownError: 'An unknown error occurred.',
        invalidExpiredVerificationCode: 'Invalid or expired verification code.',
        verificationError: 'Code expired or not found. Please try again.',
      },
      signin: {
        welcomeMessage: 'Welcome to Smartporters!',
        instructions: 'Please sign in to your account and start the delivery',
        email: 'Email',
        submit: 'Sign In',
        error: {
          invalidCredentials: 'Please enter valid credentials.',
          accountLocked: 'Too many attempts, try later.',
          invalidFormat: 'Email format is incorrect.',
          incorrectEmail: 'Email incorrect.',
          required: 'Email is required.',
        },
      },
      verification: {
        title: 'Verification',
        description:
          'We have sent an OTP verification code to your email, please enter it below',
        resendCode: "Didn't receive a code?",
        otpExpired: 'Code expired!',
        otpWillExpire: 'Will expire in 00:{{time}}',
        submitButton: 'Verify',
        otpInvalid: 'Please enter a valid 6-digit OTP.',
        otpSubmitted: 'OTP Submitted successfully!',
      },
      navigation: {
        dashboard: 'Dashboard',
        orders: 'Orders',
        routes: 'Routes',
        settings: 'Settings',
        companyList: 'Company List',
      },
      orders: {
        welcome: 'Orders page',
        nextMonth: 'Next Month',
        prevMonth: 'Previous Month',
        showAllDays: 'Show all days in month',
        call: 'call',
        orderNo: 'Order No.',
        route: 'Route',
        phoneNumber: 'Phone Number:',
        collectionTime: 'Collection Time:',
        collectionAddress: 'Collection address:',
        customerName: 'Customer Name:',
        noOrders: 'No orders available for this date',
        failedLoad: 'Error! Failed to load orders',
        unknownError: 'An unknown error occurred.',
        arrowIcon: 'Arrow Icon',
        statuses: {
          Completed: 'Completed at',
          Upcoming: 'Coming in',
          Failed: 'Failed at',
          'At Risk': 'At risk time',
          'Not arrived': 'Not arrived',
        },
      },
      orderDetails: {
        collectionInformation: 'Collection Information',
        collectionDate: 'Collection date',
        collectionAddress: 'Collection address',
        customerInformation: 'Customer Information',
        customerName: 'Customer name',
        note: 'Note from dispatcher',
        date: 'Date',
        departureAirport: 'Departure Airport',
        departureDate: 'Departure date',
        departureInfo: 'Departure information',
        dispatcherInfo: 'Dispatcher Information',
        dispatcherName: 'Dispatcher Name',
        luggageSize: 'Luggage Size',
        timeSlot: 'Time slot',
        phone: 'Phone',
        weight: 'Weight',
      },
      routes: {
        route: 'Route',
        routes: 'Routes',
        distance: 'Route Distance',
        date: 'Route Date',
        time: 'Route Time',
        start: 'Start the Route',
        statusText: 'Status',
        driver: {
          locationError: 'Driver location not found',
        },
        status: {
          atRisk: 'At Risk',
          onTime: 'On Time',
          failed: 'Failed',
          upcoming: 'Upcoming',
        },
        startConfirmation: 'Are you sure you want to start the route now?',
        collectionDate: 'Collection date',
        unknownError: 'An unknown error occurred.',
        errorFetchingRoute: 'An error occurred while fetching the route.',
        errorFetchingAddresses: 'An error occurred while fetching addresses.',
        errorAddressesPlaceholder: 'No addresses found',
        noRoutesFound: 'No available routes for this date',
        statuses: {
          onTime: 'On time',
          upcoming: 'Coming in',
          failed: 'Failed',
          atRisk: 'At risk',
        },
      },
      adminList: {
        title: 'Admin List',
        companyName: '{{companyName}}',
        clientName: '{{clientName}}',
        clientEmail: '{{clientEmail}}',
        clientDetails: 'DETAILS',
        name: 'Client name:',
        email: 'Email:',
        editButton: 'Edit',
        searchPlaceholder: 'Search',
        addAdminButton: 'Add New Admin',
        adminName: 'ADMIN NAME',
        actions: 'ACTIONS',
        pagination: 'Showing {{start}} to {{end}} of {{total}} users',
        prev: 'Previous',
        next: 'Next',
        altText: {
          edit: 'Edit Icon',
          delete: 'Delete Icon',
        },
      },
      adminForm: {
        button: 'Add new admin',
        title: 'Add new admin',
        fullName: 'Admin name',
        email: 'Email',
        add: 'Add',
        update: 'Update',
        cancel: 'Cancel',
        errors: {
          emptyFullName: "Admin full name can't be empty",
          emptyEmail: "Admin email can't be empty",
          invalidEmail: 'String should have email format',
        },
      },
      addNewAdmin: {
        button: 'Add new admin',
        title: 'Add new admin',
      },
      updateAdmin: {
        title: 'Update Admin',
      },
      deleteAdmin: {
        heading: 'Delete Admin',
        mainMessage: 'Do you really want to delete this admin?',
        subMessage: "You can't restore it after deleting.",
        cancelText: 'Cancel',
        confirmText: 'Delete',
      },
      adminApi: {
        fetch_failed: 'Failed to fetch admins data',
        created_successfully: 'Admin created successfully',
        create_failed: 'Failed to create admin',
        updated_successfully: 'Admin data updated successfully',
        update_failed: 'Failed to change admin data',
        deleted_successfully: 'Admin deleted successfully',
        delete_failed: 'Failed to delete admin',
        unexpected_error: 'An unexpected error occurred',
      },
      failReason: {
        pageTitle: 'Failed',
        reportTitle: 'Report the reason of failure',
        reportSubtitle:
          'Provide the reason for the failed delivery to ensure appropriate actions are taken',
        reasons: {
          notAvailable: "Customer isn't available at home",
          bagsNotReady: "The bags aren't ready for pickup",
          other: 'Other reason',
          explain: 'Explain your reason',
          required: 'This field is required.',
          minLength:
            'The reason must be at least {{minLetters}} characters long.',
          maxLength: 'The reason must not exceed {{maxLetters}} characters.',
        },
        actions: {
          cancel: 'Cancel',
          send: 'Send to dispatcher',
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
