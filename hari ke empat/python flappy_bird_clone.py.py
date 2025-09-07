import pygame
import sys
import random

# Inisialisasi
pygame.init()
WIDTH, HEIGHT = 400, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
clock = pygame.time.Clock()
pygame.display.set_caption("Flappy Bird Clone")

# Warna
WHITE = (255, 255, 255)
BLUE = (32, 197, 255)
YELLOW = (255, 255, 0)
GREEN = (0, 200, 0)

# Burung
bird_x = 80
bird_y = HEIGHT // 2
bird_radius = 20
bird_vel = 0
gravity = 0.5
flap_power = -8

# Pipa
pipe_width = 60
gap = 180
pipe_vel = 3
pipes = []
score = 0
font = pygame.font.SysFont("Arial", 32)

def create_pipe():
    y = random.randint(120, HEIGHT - gap - 100)
    return [WIDTH, y]

def draw_bird():
    pygame.draw.circle(screen, YELLOW, (bird_x, int(bird_y)), bird_radius)

def draw_pipes():
    for pipe in pipes:
        # Atas
        pygame.draw.rect(screen, GREEN, (pipe[0], 0, pipe_width, pipe[1]))
        # Bawah
        pygame.draw.rect(screen, GREEN, (pipe[0], pipe[1] + gap, pipe_width, HEIGHT - pipe[1] - gap))

def check_collision():
    # Tabrak atas/bawah layar
    if bird_y - bird_radius < 0 or bird_y + bird_radius > HEIGHT:
        return True
    # Tabrak pipa
    for pipe in pipes:
        if bird_x + bird_radius > pipe[0] and bird_x - bird_radius < pipe[0] + pipe_width:
            if bird_y - bird_radius < pipe[1] or bird_y + bird_radius > pipe[1] + gap:
                return True
    return False

def show_score():
    score_text = font.render(f"Score: {score}", True, (0,0,0))
    screen.blit(score_text, (10, 10))

# Game Loop
running = True
frame_count = 0
while running:
    clock.tick(60)
    screen.fill(BLUE)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
            bird_vel = flap_power

    # Burung
    bird_vel += gravity
    bird_y += bird_vel

    # Pipa
    if frame_count % 90 == 0:
        pipes.append(create_pipe())
    pipes = [[p[0] - pipe_vel, p[1]] for p in pipes if p[0] > -pipe_width]

    # Score
    for pipe in pipes:
        if pipe[0] + pipe_width == bird_x:
            score += 1

    draw_bird()
    draw_pipes()
    show_score()

    # Cek tabrakan
    if check_collision():         
        break

    pygame.display.flip()
    frame_count += 1

# Game Over
screen.fill(WHITE)
game_over_text = font.render("Game Over!", True, (255,50,50))
score_text = font.render(f"Final Score: {score}", True, (0,0,0))
screen.blit(game_over_text, (WIDTH//2-90, HEIGHT//2-40))
screen.blit(score_text, (WIDTH//2-90, HEIGHT//2))
pygame.display.flip()
pygame.time.wait(2500)
pygame.quit()
sys.exit()