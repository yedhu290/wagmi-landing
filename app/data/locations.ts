import { BUSINESS } from '../lib/site';

export type Location = {
    id: number;
    /** Short label shown in the UI and on map popups. */
    city: string;
    /** Display address, rendered as-is in the UI. */
    address: string;
    phone: string;
    /** [lat, lng] */
    coords: [number, number];
    /**
     * Address split into schema.org PostalAddress parts. Kept alongside the
     * display string so the structured data stays in sync with what is on the
     * page instead of being duplicated in the layout.
     */
    postal: {
        streetAddress: string;
        addressLocality: string;
        postalCode?: string;
    };
    /** The branch used as the organisation's registered address. */
    isPrimary?: boolean;
};

export const locations: Location[] = [
    {
        id: 1,
        city: 'Edappally',
        address: 'Wagmi Coworking and Managed Office Space, Edappally, Kochi',
        phone: BUSINESS.phone,
        coords: [10.029910609588125, 76.31987714232802],
        postal: {
            streetAddress: 'AN Square, Unichira Thoppil Rd, Marottichuvadu, Edappally',
            addressLocality: 'Kochi',
            postalCode: '682021',
        },
        isPrimary: true,
    },
    {
        id: 2,
        city: 'HMT, Kalamassery',
        address: 'Wagmi Workspace, Seaport - Airport Rd, HMT, Kalamassery, Kochi.',
        phone: BUSINESS.phone,
        coords: [10.04483620546756, 76.33748702883598],
        postal: {
            streetAddress: 'Seaport - Airport Rd, HMT, Kalamassery',
            addressLocality: 'Kochi',
        },
    },
    {
        id: 3,
        city: 'Pathadipalam',
        address: '31/133A , EM Commercial Centre, Koonamthai, Edappally, Ernakulam, Kerala, 682024',
        phone: BUSINESS.phone,
        coords: [10.034117082818941, 76.31340045582007],
        postal: {
            streetAddress: '31/133A, EM Commercial Centre, Koonamthai, Edappally',
            addressLocality: 'Ernakulam',
            postalCode: '682024',
        },
    },
    {
        id: 4,
        city: 'Thrikkakara',
        address: 'Thrikkakara Heights, 1917, Ward No. 4, Thrikkakara, Kochi, Kerala Pin: 682021',
        phone: BUSINESS.phone,
        coords: [10.034435049088826, 76.33335142265261],
        postal: {
            streetAddress: 'Thrikkakara Heights, 1917, Ward No. 4, Thrikkakara',
            addressLocality: 'Kochi',
            postalCode: '682021',
        },
    },
    {
        id: 5,
        city: 'Kalamassery',
        address: 'Eloor Kizhakkumbhagam, Kalamassery, Ernakulam, Kerala 683501',
        phone: BUSINESS.phone,
        coords: [10.074248597727571, 76.30968859354948],
        postal: {
            streetAddress: 'Eloor Kizhakkumbhagam, Kalamassery',
            addressLocality: 'Ernakulam',
            postalCode: '683501',
        },
    },
];

export const primaryLocation = locations.find((l) => l.isPrimary) ?? locations[0];
