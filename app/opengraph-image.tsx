import { ImageResponse } from 'next/og';
import { BUSINESS } from './lib/site';
import { locations } from './data/locations';

export const alt = 'Wagmi Workspace — Premium Coworking Space in Kochi, Kerala';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Generated at build time so the social preview can never 404 or fall out of
 * step with the brand colours. Satori supports a subset of CSS, so this uses
 * flexbox only.
 */
export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#F3F4FB',
                    padding: '72px 80px',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: -160,
                        right: -160,
                        width: 560,
                        height: 560,
                        borderRadius: 560,
                        backgroundColor: '#6676D2',
                        opacity: 0.12,
                    }}
                />

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                fontSize: 30,
                                fontWeight: 700,
                                letterSpacing: 8,
                                color: '#6676D2',
                            }}
                        >
                            {BUSINESS.name.toUpperCase()}
                        </div>
                        <div style={{ display: 'flex', fontSize: 24, color: '#4A4C63' }}>
                            wagmiworkspace.com
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            marginTop: 40,
                            fontSize: 86,
                            fontWeight: 800,
                            lineHeight: 1.05,
                            color: '#15162B',
                        }}
                    >
                        Designed for modern work.
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            marginTop: 28,
                            fontSize: 34,
                            color: '#4A4C63',
                        }}
                    >
                        Premium coworking space in Kochi, Kerala
                    </div>
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', gap: 12 }}>
                        {locations.map((location) => (
                            <div
                                key={location.id}
                                style={{
                                    display: 'flex',
                                    padding: '12px 20px',
                                    borderRadius: 999,
                                    backgroundColor: '#FFFFFF',
                                    border: '2px solid #6676D2',
                                    fontSize: 21,
                                    fontWeight: 600,
                                    color: '#15162B',
                                }}
                            >
                                {location.city}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        size,
    );
}
