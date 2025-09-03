import sys
import time

def hide_cursor():
    sys.stdout.write("\033[?25l")
    sys.stdout.flush()

def show_cursor():
    sys.stdout.write("\033[?25h")
    sys.stdout.flush()

def type_lyrics():
    lines = [
       
        # ==== PRE-CHORUS ====
        ("Man, forget yo pride", 0.05, 0.4),
        ("Just take it on back, boy, take it on back, boy", 0.05, 0.5),
        ("Take it back all night", 0.05, 0.6),
        ("Just take it on back, take it on back", 0.05, 0.5),
        ("Mmm, do what cha gotta do, keep me up all night", 0.05, 0.6),

        # ==== CHORUS ====
        ("Hurtin' vibe, man, it hurts inside when I look you in yo eye", 0.08, 0.7),
        ("What are you willing to do?", 0.08, 1.2),
        ("Oh, tell me what you’re willing to do", 0.08, 1.2),
        ("Kiss it, kiss it better, baby", 0.08, 1.2),
        ("What are you willing to do?", 0.08, 1.2),
        ("Oh, tell me what you’re willing to do", 0.08, 1.2),
    ] 

    hide_cursor()
    try:
        for text, char_delay, line_delay in lines:
            for char in text:
                print(char, end="", flush=True)
                time.sleep(char_delay)
            print()
            time.sleep(line_delay)
    finally:
        show_cursor()                                                                                                                                                                                                                  

if __name__ == "__main__":
    type_lyrics()
