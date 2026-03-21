import { CloudUpload, Image, Video, FileArchive, Download, Database } from 'lucide-react';
import { MEDIA_FILES } from '../../shared/constants';

export default function MediaLibrary() {
  return (
    <div className="bg-[#141122] p-4 rounded-xl border border-[#3b3267] flex flex-col gap-4 shadow-sm h-full max-h-[600px] overflow-hidden">
      <div className="border-2 border-dashed border-[#3b3267] rounded-lg p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/50 transition-colors">
        <div className="p-3 bg-primary/10 rounded-full text-primary mb-3 group-hover:scale-110 transition-transform">
          <CloudUpload className="w-6 h-6" />
        </div>
        <p className="text-sm font-bold">Déposez vos fichiers ici</p>
        <p className="text-[10px] text-text-muted mt-1">MP4, PNG, JPG (Max 50Mo)</p>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
        {MEDIA_FILES.map((file) => (
          <div 
            key={file.id} 
            className="flex items-center gap-3 p-2 bg-surface-dark rounded-lg border border-transparent hover:border-primary/20 transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded bg-border-dark flex items-center justify-center">
              {file.type === 'image' && <Image className="w-5 h-5 text-primary" />}
              {file.type === 'video' && <Video className="w-5 h-5 text-primary" />}
              {file.type === 'archive' && <FileArchive className="w-5 h-5 text-primary" />}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold truncate">{file.name}</p>
              <p className="text-[10px] text-text-muted">{file.size} • {file.date}</p>
            </div>
            <Download className="w-4 h-4 text-slate-400" />
          </div>
        ))}
      </div>

      <div className="pt-2">
        <div className="bg-primary/5 p-4 rounded-xl border border-primary/20">
          <div className="flex items-center gap-3 mb-2">
            <Database className="w-5 h-5 text-primary" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Espace Utilisé</p>
          </div>
          <div className="w-full h-1.5 bg-primary/20 rounded-full overflow-hidden mb-2">
            <div className="bg-primary h-full rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-[10px] text-text-muted">6.5 Go sur 10 Go (65%)</p>
        </div>
      </div>
    </div>
  );
}
