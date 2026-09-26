$csharp = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Collections.Generic;

public class ImageCutter {
    public static void Process(string src, string dst, int cropBottom, int threshold) {
        using (Bitmap bmp = new Bitmap(src)) {
            int w = bmp.Width;
            int h = bmp.Height - cropBottom;
            if (h <= 0) h = bmp.Height;

            Bitmap outBmp = new Bitmap(w, h, PixelFormat.Format32bppArgb);
            bool[,] visited = new bool[w, h];
            Queue<Point> q = new Queue<Point>();

            // Enqueue outer border points
            for (int x = 0; x < w; x++) {
                q.Enqueue(new Point(x, 0));
                q.Enqueue(new Point(x, h - 1));
            }
            for (int y = 0; y < h; y++) {
                q.Enqueue(new Point(0, y));
                q.Enqueue(new Point(w - 1, y));
            }

            while (q.Count > 0) {
                Point p = q.Dequeue();
                int x = p.X;
                int y = p.Y;
                if (x < 0 || x >= w || y < 0 || y >= h) continue;
                if (visited[x, y]) continue;
                visited[x, y] = true;

                Color c = bmp.GetPixel(x, y);
                if (c.R >= threshold && c.G >= threshold && c.B >= threshold) {
                    q.Enqueue(new Point(x + 1, y));
                    q.Enqueue(new Point(x - 1, y));
                    q.Enqueue(new Point(x, y + 1));
                    q.Enqueue(new Point(x, y - 1));
                }
            }

            for (int y = 0; y < h; y++) {
                for (int x = 0; x < w; x++) {
                    if (visited[x, y]) {
                        outBmp.SetPixel(x, y, Color.FromArgb(0, 0, 0, 0));
                    } else {
                        // Clear heart icon (top right) if present
                        if (x > w - 38 && y < 38 && bmp.GetPixel(x, y).R > 160) {
                            outBmp.SetPixel(x, y, Color.FromArgb(0, 0, 0, 0));
                        } else {
                            outBmp.SetPixel(x, y, bmp.GetPixel(x, y));
                        }
                    }
                }
            }

            outBmp.Save(dst, ImageFormat.Png);
            outBmp.Dispose();
        }
    }
}
"@

Add-Type -TypeDefinition $csharp -ReferencedAssemblies "System.Drawing"

[ImageCutter]::Process("E:\web site\products\Screenshot 2026-09-26 184206 - Copy.png", "E:\web site\public\images\products\orient-diver-chrono.png", 25, 235)
[ImageCutter]::Process("E:\web site\products\Screenshot 2026-09-26 200822.png", "E:\web site\public\images\products\regent-emerald-chrono-1.png", 0, 240)
[ImageCutter]::Process("E:\web site\products\Screenshot 2026-09-26 200849.png", "E:\web site\public\images\products\regent-emerald-chrono-2.png", 0, 240)

[ImageCutter]::Process("E:\web site\products\Screenshot 2026-09-26 214015.png", "E:\web site\public\images\products\regent-rg6029zl.png", 115, 235)
[ImageCutter]::Process("E:\web site\products\Screenshot 2026-09-26 214024.png", "E:\web site\public\images\products\regent-rg5011fl.png", 112, 235)
[ImageCutter]::Process("E:\web site\products\Screenshot 2026-09-26 214036.png", "E:\web site\public\images\products\titan-1698qm02.png", 115, 235)
[ImageCutter]::Process("E:\web site\products\Screenshot 2026-09-26 214044.png", "E:\web site\public\images\products\richmond-rm6011fl.png", 112, 235)
[ImageCutter]::Process("E:\web site\products\Screenshot 2026-09-26 214051.png", "E:\web site\public\images\products\titan-1874sl02.png", 125, 235)
[ImageCutter]::Process("E:\web site\products\Screenshot 2026-09-26 214104.png", "E:\web site\public\images\products\richmond-rm7001sc.png", 119, 235)
[ImageCutter]::Process("E:\web site\products\Screenshot 2026-09-26 214113.png", "E:\web site\public\images\products\cairnhill-ch2013sn.png", 120, 235)

Write-Host "Product images cut successfully."
