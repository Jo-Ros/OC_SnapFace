import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: 'archibald',
          description: 'Le Meilleur Chapelier',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe243NN2bjC6r1dMp5erQYQLc40pP9L2Z5uw&usqp=CAU',
          createdDate: new Date(),
          snaps: 2,
          location: 'Paris'
        },
        {
          id: 2,
          title: 'bob kelso',
          description: 'Pomme de Pin',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbEYwH909kmLJ0poALyjV6ia2G58Ih_CvOA&usqp=CAU',
          createdDate: new Date(),
          snaps: 0
        },
        {
          id: 3,
          title: 'john dorian',
          description: 'JD',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW8k4L4kYaagV_CmsVgftMySdnlJv40PKjA&usqp=CAU',
          createdDate: new Date(),
          snaps: 0
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getSnapFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        }
        else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getSnapFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

}