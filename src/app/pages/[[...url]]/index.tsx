import VisualBuilderComponent from "../../components/base/VisualBuilderComponent";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    let version: string | undefined;
    let key: string | undefined;

    if (typeof window !== "undefined" && window.location !== undefined) {
        const locationUrl = window.location.toString();
        if (locationUrl.indexOf("/CMS/Content") !== -1 && locationUrl.indexOf(",,") !== -1) {
            const pathArray = window?.location?.pathname?.split('/')
            const contentId = pathArray[pathArray.length - 1]

            const contentIdArray = contentId.split('_')
            if (contentIdArray.length > 1) {
                version = contentIdArray[contentIdArray.length - 1]
            }
        } else if (locationUrl.indexOf("/preview?key")) {
            const url = new URL(locationUrl);
            try {
                const urlKey = url.searchParams.get("key");
                if (urlKey) {
                    key = urlKey;
                }
            } catch {
                key = undefined;   
            }
            
            try {
                const urlVer = url.searchParams.get("ver");
                if (urlVer) {
                    version = urlVer;
                }
            } catch {
                version = undefined;   
            }
        }
    }
    
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <VisualBuilderComponent version={version} contentKey={key}/>
        </main>
        // </>
    );
}