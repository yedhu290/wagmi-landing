import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/**
 * Replaces the /apple-touch-icon.png that was referenced in metadata but never
 * existed in public/.
 */
export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#6676D2',
                    color: '#FFFFFF',
                    fontSize: 104,
                    fontWeight: 800,
                }}
            >
                W
            </div>
        ),
        size,
    );
}
